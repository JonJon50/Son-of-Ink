import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ALLOWED_REFERENCE_IMAGE_EXTENSIONS,
  MAX_REFERENCE_IMAGES,
  createEmptyTattooPlan,
  validateReferenceImages,
} from "../../utils/tattooPlan";

const STYLE_OPTIONS = [
  "Fine line",
  "Realism",
  "Traditional",
  "Lettering",
  "Geometric or ornamental",
  "Not sure yet",
];
const PLACEMENT_OPTIONS = [
  "Arm",
  "Leg",
  "Chest",
  "Back",
  "Hand or neck",
  "Other or not sure",
];
const SIZE_OPTIONS = [
  'Small (under 3")',
  'Medium (3–6")',
  'Large (7–12")',
  "Sleeve or large-scale",
  "Not sure yet",
];
const COLOR_OPTIONS = [
  "Black and gray",
  "Full color",
  "Mixed color and black",
  "Not sure yet",
];
const QUESTION_COUNT = 6;
const SUMMARY_STEP = QUESTION_COUNT;

const Home = ({ onPlanComplete }) => {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [plan, setPlan] = useState(createEmptyTattooPlan);
  const [plannerError, setPlannerError] = useState("");
  const openerRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!plannerOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPlannerOpen(false);
        return;
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusableElements = Array.from(
          modalRef.current.querySelectorAll(
            'a[href], button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex]:not([tabindex="-1"])'
          )
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (
          event.shiftKey &&
          (document.activeElement === firstElement ||
            document.activeElement === modalRef.current)
        ) {
          event.preventDefault();
          lastElement?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [plannerOpen]);

  const openPlanner = (event) => {
    openerRef.current = event.currentTarget;
    setPlannerError("");
    setPlannerOpen(true);
  };

  const closePlanner = () => {
    setPlannerError("");
    setPlannerOpen(false);
  };

  const updatePlan = (key, value) => {
    setPlannerError("");
    setPlan((previous) => ({ ...previous, [key]: value }));
  };

  const canContinue =
    step === 0
      ? Boolean(plan.style)
      : step === 1
        ? Boolean(plan.placement)
        : step === 2
          ? Boolean(plan.size)
          : step === 3
            ? Boolean(plan.color)
            : true;

  const handleContinue = () => {
    if (!canContinue) return;
    setPlannerError("");
    setStep((currentStep) =>
      currentStep === QUESTION_COUNT - 1 ? SUMMARY_STEP : currentStep + 1
    );
  };

  const handleBack = () => {
    setPlannerError("");
    setStep((currentStep) => Math.max(0, currentStep - 1));
  };

  const handleReferenceImages = ({ target }) => {
    const selectedFiles = Array.from(target.files || []);
    const validationError = validateReferenceImages(selectedFiles);

    if (validationError) {
      target.value = "";
      setPlannerError(validationError);
      return;
    }

    updatePlan("referenceImages", selectedFiles);
  };

  const handlePlanComplete = () => {
    onPlanComplete?.(plan);
    closePlanner();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.requestAnimationFrame(() => {
      document.getElementById("booking")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  const renderOptions = (options, field) => (
    <div className={styles.plannerOptions}>
      {options.map((option) => {
        const selected = plan[field] === option;

        return (
          <button
            key={option}
            type="button"
            className={selected ? styles.plannerOptionSelected : ""}
            aria-pressed={selected}
            onClick={() => updatePlan(field, option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );

  const renderQuestion = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h2 id="planner-title">What tattoo style speaks to you?</h2>
            <p className={styles.plannerHint}>
              Choose the closest match. You can refine the idea with your artist.
            </p>
            {renderOptions(STYLE_OPTIONS, "style")}
          </>
        );
      case 1:
        return (
          <>
            <h2 id="planner-title">Where would you like your tattoo?</h2>
            <p className={styles.plannerHint}>
              Choose the general placement for now.
            </p>
            {renderOptions(PLACEMENT_OPTIONS, "placement")}
          </>
        );
      case 2:
        return (
          <>
            <h2 id="planner-title">About how large will it be?</h2>
            <p className={styles.plannerHint}>
              An estimate is enough for the consultation.
            </p>
            {renderOptions(SIZE_OPTIONS, "size")}
          </>
        );
      case 3:
        return (
          <>
            <h2 id="planner-title">What color direction do you prefer?</h2>
            <p className={styles.plannerHint}>
              Your artist can help finalize the palette.
            </p>
            {renderOptions(COLOR_OPTIONS, "color")}
          </>
        );
      case 4:
        return (
          <>
            <h2 id="planner-title">Add reference images</h2>
            <p className={styles.plannerHint}>
              Optional — upload examples of style, subject, or composition.
            </p>
            <label className={styles.plannerUpload} htmlFor="planner-images">
              <span>Choose reference images</span>
              <input
                id="planner-images"
                type="file"
                accept={ALLOWED_REFERENCE_IMAGE_EXTENSIONS.join(",")}
                multiple
                onChange={handleReferenceImages}
              />
            </label>
            <p className={styles.plannerFileLimit}>
              Up to {MAX_REFERENCE_IMAGES} images, 10 MB each
            </p>
            {plan.referenceImages.length > 0 && (
              <ul className={styles.plannerFileList}>
                {plan.referenceImages.map((file) => (
                  <li key={`${file.name}-${file.lastModified}`}>{file.name}</li>
                ))}
              </ul>
            )}
          </>
        );
      case 5:
        return (
          <>
            <h2 id="planner-title">Anything else we should know?</h2>
            <p className={styles.plannerHint}>
              Optional — describe the subject, mood, meaning, or other details.
            </p>
            <label className={styles.plannerNotesLabel} htmlFor="planner-notes">
              Notes
            </label>
            <textarea
              id="planner-notes"
              className={styles.plannerNotes}
              rows={6}
              value={plan.notes}
              onChange={(event) => updatePlan("notes", event.target.value)}
              placeholder="Tell us more about your tattoo idea..."
            />
          </>
        );
      default:
        return null;
    }
  };

  const fadeInUp = {
    initial: { y: 90, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className={styles.home}>
      {/* Video Section */}
      <div className={styles.videoContainer}>
        <video
          src="/static/videos/Tattoo-Videos.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
        <div className={styles.videoOverlay}>
          <div className={styles.heroContent}>
            <motion.h1
              className={`${styles["text-overlay"]} ${styles.customFont}`}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              Son of <span className={styles.accentLetter}>I</span>nk
            </motion.h1>
            <p className={styles.heroStatement}>
              Imagine Your Vision <span>And Bring It to Life</span>
            </p>
            <p className={styles.heroCopy}>
              Bringing your vision to life with personalized tattoos and
              exceptional client experiences.
            </p>
            <div className={styles.heroActions}>
              <Link href="/booking">
                <motion.button
                  className={styles.roundButton}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1.2, delay: 0.5 }}
                >
                  Book a Consultation
                </motion.button>
              </Link>
              <button
                type="button"
                className={styles.secondaryAction}
                onClick={openPlanner}
              >
                Start Your Tattoo Plan
              </button>
              <Link href="/artist" className={styles.secondaryAction}>
                Artist
              </Link>
            </div>
            <div className={styles.bookingQuickInfo}>
              <span>Custom pricing based on size, placement, and design detail</span>
              <span>Consultation replies within 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      {plannerOpen && (
        <div
          className={styles.plannerBackdrop}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePlanner();
          }}
        >
          <div
            ref={modalRef}
            className={styles.plannerModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="planner-title"
            tabIndex={-1}
          >
            <button
              type="button"
              className={styles.plannerClose}
              onClick={closePlanner}
              aria-label="Close tattoo planner"
            >
              ×
            </button>

            <div className={styles.plannerProgressHeader}>
              <p>
                {step === SUMMARY_STEP
                  ? "Plan complete"
                  : `Question ${step + 1} of ${QUESTION_COUNT}`}
              </p>
              <div
                className={styles.plannerProgress}
                role="progressbar"
                aria-label="Tattoo plan progress"
                aria-valuemin="0"
                aria-valuemax={QUESTION_COUNT}
                aria-valuenow={
                  step === SUMMARY_STEP ? QUESTION_COUNT : step + 1
                }
              >
                <span
                  style={{
                    width: `${
                      ((step === SUMMARY_STEP ? QUESTION_COUNT : step + 1) /
                        QUESTION_COUNT) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className={styles.plannerStep} key={step}>
              {step === SUMMARY_STEP ? (
                <>
                  <h2 id="planner-title">Review your tattoo plan</h2>
                  <p className={styles.plannerHint}>
                    We’ll add these details to your booking request.
                  </p>
                  <dl className={styles.plannerSummary}>
                    <div>
                      <dt>Style</dt>
                      <dd>{plan.style}</dd>
                    </div>
                    <div>
                      <dt>Placement</dt>
                      <dd>{plan.placement}</dd>
                    </div>
                    <div>
                      <dt>Size</dt>
                      <dd>{plan.size}</dd>
                    </div>
                    <div>
                      <dt>Color</dt>
                      <dd>{plan.color}</dd>
                    </div>
                    <div>
                      <dt>Reference images</dt>
                      <dd>
                        {plan.referenceImages.length
                          ? plan.referenceImages.map((file) => file.name).join(", ")
                          : "None added"}
                      </dd>
                    </div>
                    <div>
                      <dt>Notes</dt>
                      <dd>{plan.notes.trim() || "None added"}</dd>
                    </div>
                  </dl>
                </>
              ) : (
                renderQuestion()
              )}
            </div>

            {plannerError && (
              <p className={styles.plannerError} role="alert">
                {plannerError}
              </p>
            )}

            <div className={styles.plannerControls}>
              {step > 0 && (
                <button
                  type="button"
                  className={styles.plannerBack}
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              {step === SUMMARY_STEP ? (
                <button
                  type="button"
                  className={styles.plannerContinue}
                  onClick={handlePlanComplete}
                >
                  Continue to Booking
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.plannerContinue}
                  onClick={handleContinue}
                  disabled={!canContinue}
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Overlay Section */}
      <div className={styles.videoOverlaySection}>
        <video
          autoPlay
          loop
          muted
          preload="auto"
          poster="/Assets/HandsTattooing.jpeg"
          className={styles.overlayVideo}
        />
        <div className={styles.overlayContent}>
          <motion.h2
            className={styles.mainTitle}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Imagine Your Vision <br /> And Bring It to Life
          </motion.h2>
          <div className={styles.sideBySideParagraphs}>
            <div className={styles.paragraphSection}>
              <h2 className={styles.subtitle}>Who We Are</h2>
              <p>
                At Son of Ink, we are passionate about providing an exceptional
                tattoo experience. From personalized designs to aftercare
                guidance, we ensure every client feels valued and leaves with a
                piece of art they’re proud to wear.
              </p>
            </div>
            <div className={styles.paragraphSection}>
              <h2 className={styles.subtitle}>What We Do</h2>
              <p>
                Our team stands out by delivering client-driven artistry.
                Whether it’s your first tattoo or your tenth, we make the
                process comfortable and collaborative, ensuring a unique and
                memorable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
