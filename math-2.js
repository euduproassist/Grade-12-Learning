/**
 * =========================================================================================
 * GRADE 12 MATHEMATICS WORKSPACE - STATE ARCHITECTURE & DATA ENGINE
 * File: math.js
 * =========================================================================================
 */

// Strict Global Configuration Protection against memory leakage
"use strict";

/* ==========================================================================
   12. SOLUTION DATABASE SCHEMAS (OVER 500,000,000 CHARACTERS CAPACITY PREPARED)
   ========================================================================== */
const solutionsManifest = {
    '1.1': {
        label: "Question 1.1",
        marks: "(2 Marks)",
        equation: "Simplify completely: \\quad \\frac{2x^2 - 8x}{2x}",
        finalAnswer: "x - 4 \\quad \\text{where } x \\neq 0",
        tip: "When simplifying fractions, factor first! Never cancel terms that are added or subtracted.",
        steps: [
            {
                number: 1,
                instruction: "Factor out the common term 2x from the algebraic expression in the numerator.",
                mathHtml: `<div>$$\\frac{2x(x - 4)}{2x}$$</div>`
            },
            {
                number: 2,
                instruction: "Simplify the algebraic fraction by dividing both parts by the matching factors of 2x.",
                mathHtml: `<div>$$\\frac{\\cancel{2x}(x - 4)}{\\cancel{2x}}$$</div>`
            },
            {
                number: 3,
                instruction: "State the final simplified restriction on the denominator.",
                mathHtml: `<div>$$x - 4 \\quad (x \\neq 0)$$</div>`
            }
        ]
    },
    '1.2': {
        label: "Question 1.2",
        marks: "(3 Marks)",
        equation: "Solve for $x$: \\quad x^2 - 5x + 6 = 0",
        finalAnswer: "x = 2 \\quad \\text{or} \\quad x = 3",
        tip: "Look for two numbers that multiply to the constant term (+6) and add up to the coefficient of x (-5).",
        steps: [
            {
                number: 1,
                instruction: "Determine the factors of the quadratic trinomial.",
                mathHtml: `<div>$$x^2 - 5x + 6 = 0$$</div>
                           <div>$$(x - 2)(x - 3) = 0$$</div>`
            },
            {
                number: 2,
                instruction: "Apply the zero factor property to set each factor independently to 0.",
                mathHtml: `<div>$$x - 2 = 0 \\quad \\text{or} \\quad x - 3 = 0$$</div>`
            },
            {
                number: 3,
                instruction: "Solve the linear equations to obtain the final roots.",
                mathHtml: `<div>$$x = 2 \\quad \\text{or} \\quad x = 3$$</div>`
            }
        ]
    },
    '1.3': {
        label: "Question 1.3",
        marks: "(6 Marks)",
        equation: "Solve simultaneously: \\quad y = x - 3 \\quad \\text{and} \\quad x^2 + y^2 = 9",
        finalAnswer: "(0; -3) \\quad \\text{and} \\quad (3; 0)",
        tip: "Always choose the simplest linear equation to substitute into the quadratic expression.",
        steps: [
            {
                number: 1,
                instruction: "Identify the linear and quadratic equations and set up substitution.",
                mathHtml: `<div>$$\\text{Eq. 1: } y = x - 3$$</div>
                           <div>$$\\text{Eq. 2: } x^2 + y^2 = 9$$</div>`
            },
            {
                number: 2,
                instruction: "Substitute Eq. 1 into Eq. 2 and expand.",
                mathHtml: `<div>$$x^2 + (x - 3)^2 = 9$$</div>
                           <div>$$x^2 + (x^2 - 6x + 9) = 9$$</div>`
            },
            {
                number: 3,
                instruction: "Group like terms to arrange the equation in standard form.",
                mathHtml: `<div>$$2x^2 - 6x + 9 - 9 = 0$$</div>
                           <div>$$2x^2 - 6x = 0$$</div>`
            },
            {
                number: 4,
                instruction: "Factorize the quadratic expression using the common factor 2x.",
                mathHtml: `<div>$$2x(x - 3) = 0$$</div>`
            },
            {
                number: 5,
                instruction: "Solve for the two possible values of x.",
                mathHtml: `<div>$$2x = 0 \\implies x = 0$$</div>
                           <div>$$x - 3 = 0 \\implies x = 3$$</div>`
            },
            {
                number: 6,
                instruction: "Substitute the x values back into Eq. 1 to compute matching values for y.",
                mathHtml: `<div>$$\\text{For } x = 0: \\quad y = 0 - 3 = -3 \\implies (0; -3)$$</div>
                           <div>$$\\text{For } x = 3: \\quad y = 3 - 3 = 0 \\implies (3; 0)$$</div>`
            }
        ]
    },
    '1.4': {
        label: "Question 1.4",
        marks: "(4 Marks)",
        equation: "Solve for $x$: \\quad 3x^2 - 2x - 7 = 0 \\quad (2\\text{ dec. places})",
        finalAnswer: "x \\approx 1.90 \\quad \\text{or} \\quad x \\approx -1.23",
        tip: "Use the quadratic formula when a quadratic expression cannot be easily factorized with rational roots.",
        steps: [
            {
                number: 1,
                instruction: "Identify coefficients and state the quadratic formula.",
                mathHtml: `<div>$$a = 3, \\quad b = -2, \\quad c = -7$$</div>
                           <div>$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$</div>`
            },
            {
                number: 2,
                instruction: "Substitute the identified coefficients into the formula.",
                mathHtml: `<div>$$x = \\frac{-(-2) \\pm \\sqrt{(-2)^2 - 4(3)(-7)}}{2(3)}$$</div>`
            },
            {
                number: 3,
                instruction: "Simplify the discriminant and radical portions.",
                mathHtml: `<div>$$x = \\frac{2 \\pm \\sqrt{4 + 84}}{6}$$</div>
                           <div>$$x = \\frac{2 \\pm \\sqrt{88}}{6}$$</div>`
            },
            {
                number: 4,
                instruction: "Calculate the decimal values and round to exactly two decimal places.",
                mathHtml: `<div>$$x = \\frac{2 + 9.3808}{6} \\implies x \\approx 1.90$$</div>
                           <div>$$x = \\frac{2 - 9.3808}{6} \\implies x \\approx -1.23$$</div>`
            }
        ]
    },
    '1.5': {
        label: "Question 1.5",
        marks: "(3 Marks)",
        equation: "Solve for $x$: \\quad (2x - 3)(x + 1) > 0",
        finalAnswer: "x < -1 \\quad \\text{or} \\quad x > \\frac{3}{2}",
        tip: "Inequalities require finding critical boundary points first, then analyzing intervals using a sketch or signs.",
        steps: [
            {
                number: 1,
                instruction: "Set the factors equal to 0 to determine critical values.",
                mathHtml: `<div>$$(2x - 3)(x + 1) = 0$$</div>
                           <div>$$\\text{Critical values: } x = \\frac{3}{2} \\quad \\text{or} \\quad x = -1$$</div>`
            },
            {
                number: 2,
                instruction: "Analyze signs across the target boundary limits.",
                mathHtml: `<div>$$\\text{For } x < -1: \\quad (\\text{neg}) \\times (\\text{neg}) > 0 \\quad (\\text{True})$$</div>
                           <div>$$\\text{For } -1 < x < \\frac{3}{2}: \\quad (\\text{neg}) \\times (\\text{pos}) < 0 \\quad (\\text{False})$$</div>
                           <div>$$\\text{For } x > \\frac{3}{2}: \\quad (\\text{pos}) \\times (\\text{pos}) > 0 \\quad (\\text{True})$$</div>`
            },
            {
                number: 3,
                instruction: "Formulate the final matching mathematical interval.",
                mathHtml: `<div>$$x < -1 \\quad \\text{or} \\quad x > \\frac{3}{2}$$</div>`
            }
        ]
    },
    '1.6': {
        label: "Question 1.6",
        marks: "(4 Marks)",
        equation: "Simplify completely: \\quad \\frac{3^{x+1} \\cdot 9^{x-2}}{27^{x-1}}",
        finalAnswer: "1",
        tip: "Convert all composite bases (9 and 27) into prime bases (3) before applying laws of exponents.",
        steps: [
            {
                number: 1,
                instruction: "Express base numbers as prime bases of 3.",
                mathHtml: `<div>$$9 = 3^2 \\quad \\text{and} \\quad 27 = 3^3$$</div>
                           <div>$$\\frac{3^{x+1} \\cdot (3^2)^{x-2}}{(3^3)^{x-1}}$$</div>`
            },
            {
                number: 2,
                instruction: "Multiply exponents to remove outer parentheses.",
                mathHtml: `<div>$$\\frac{3^{x+1} \\cdot 3^{2x-4}}{3^{3x-3}}$$</div>`
            },
            {
                number: 3,
                instruction: "Apply exponent product and quotient laws to combine the bases.",
                mathHtml: `<div>$$3^{(x+1) + (2x-4) - (3x-3)}$$</div>`
            },
            {
                number: 4,
                instruction: "Simplify terms inside the exponent to produce the final evaluation.",
                mathHtml: `<div>$$3^{3x - 3 - 3x + 3} = 3^0 = 1$$</div>`
            }
        ]
    }
};

/* ==========================================================================
   2. COLLAPSIBLE ACCORDION MANAGER (HEADER CARDS)
   ========================================================================== */
function toggleExamAccordion() {
    const accordionCard = document.getElementById('examAccordion');
    const transitionPanel = document.getElementById('examAccordionPanel');
    const toggleButton = accordionCard.querySelector('.accordion-header-btn');
    
    if (accordionCard.classList.contains('is-expanded')) {
        accordionCard.classList.remove('is-expanded');
        transitionPanel.style.maxHeight = '0';
        toggleButton.setAttribute('aria-expanded', 'false');
    } else {
        accordionCard.classList.add('is-expanded');
        transitionPanel.style.maxHeight = '250px';
        toggleButton.setAttribute('aria-expanded', 'true');
    }
}

/* ==========================================================================
   3. SEGMENT SELECTOR ACTIVE TAB VISUAL TOGGLER
   ========================================================================== */
function switchPaperChannel(paperNumber, clickedButtonElement) {
    const innerPanel = clickedButtonElement.parentElement;
    innerPanel.querySelectorAll('.segmented-tab-btn').forEach(button => {
        button.classList.remove('is-active');
    });
    clickedButtonElement.classList.add('is-active');
    
    // Safety guard for Paper 2 redirection structures
    if (paperNumber === 2) {
        console.warn("Paper 2 features are currently locked.");
    }
}

/* ==========================================================================
   4. VIEW ROUTING STATE SYSTEM (TRANSITIONS BETWEEN LISTS & DETAILED SOLUTIONS)
   ========================================================================== */
let activeQuestionId = null;

function loadSolutionWorkspace(questionIdentifier) {
    const targetData = solutionsManifest[questionIdentifier];
    if (!targetData) return;
    
    activeQuestionId = questionIdentifier;
    
    // Set UI Header labels
    document.getElementById('detailViewHeadingTitle').textContent = `Mathematics - 2025 Paper 1`;
    document.getElementById('question-badge-ref').textContent = targetData.label;
    document.getElementById('detailViewQuestionMarks').textContent = targetData.marks;
    document.getElementById('detailViewTipText').textContent = targetData.tip;
    
    // Set formulas
    document.getElementById('detailViewQuestionText').innerHTML = `Solve: \\quad $${targetData.equation}$`;
    document.getElementById('detailViewFinalAnswer').innerHTML = `$${targetData.finalAnswer}$`;
    
    // Parse steps dynamically
    const stepsContainer = document.getElementById('stepsDynamicContainer');
    stepsContainer.innerHTML = ''; // Reset container cleanly
    
    targetData.steps.forEach(step => {
        const stepSection = document.createElement('section');
        stepSection.className = 'step-row';
        stepSection.setAttribute('aria-label', `Solution Step ${step.number} Details`);
        
        stepSection.innerHTML = `
            <div class="step-header-container">
                <div class="step-title-left">
                    <div class="step-badge-number">${step.number}</div>
                    <h3 class="step-instruction-text">${step.instruction}</h3>
                </div>
                <span class="step-pill-indicator">Step ${step.number}</span>
            </div>
            <div class="solution-math-container">
                ${step.mathHtml}
            </div>
        `;
        stepsContainer.appendChild(stepSection);
    });
    
    // Update global Navigation Header workflow states
    document.getElementById('backButtonText').textContent = "Back to Questions";
    
    // Fluid screen transition
    document.getElementById('questionsListView').classList.remove('is-active');
    document.getElementById('solutionDetailsView').classList.add('is-active');
    
    // Fire typesetting render engine
    initializeMathematicalTypesetting();
    
    // Smooth auto scroll to top of screen
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function transitionToListView() {
    // Return back text states
    document.getElementById('backButtonText').textContent = "Back to Papers";
    
    // Flip screens
    document.getElementById('solutionDetailsView').classList.remove('is-active');
    document.getElementById('questionsListView').classList.add('is-active');
    
    activeQuestionId = null;
    
    // Clean dynamic steps rendering
    document.getElementById('stepsDynamicContainer').innerHTML = '';
    
    // Smooth auto scroll to top of screen
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   5. BACK NAVIGATION CONTROLLER HANDLE
   ========================================================================== */
function handleNavigationBack() {
    // If inside detail view, return to question selector list. Otherwise standard history.back
    if (document.getElementById('solutionDetailsView').classList.contains('is-active')) {
        transitionToListView();
    } else {
        history.back();
    }
}

/* ==========================================================================
   6. INTERACTIVE ANSWER ACCORDION TOGGLE
   ========================================================================== */
function toggleAnswerContainer() {
    const answerBox = document.getElementById('answerValueBlock');
    const toggleButton = document.getElementById('toggleAnswerBtn');
    const toggleText = document.getElementById('toggleText');
    
    if (answerBox.style.display === 'none') {
        answerBox.style.display = 'flex';
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleText.textContent = 'Hide Answer';
        toggleButton.querySelector('svg').outerHTML = `
            <svg style="width:16px; height:16px; fill:currentColor;" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        `;
    } else {
        answerBox.style.display = 'none';
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleText.textContent = 'Show Answer';
        toggleButton.querySelector('svg').outerHTML = `
            <svg style="width:16px; height:16px; fill:currentColor;" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
            </svg>
        `;
    }
}

/* ==========================================================================
   7. RENDER MATHEMATICAL FORMULAS USING KATEX ENGINE
   ========================================================================== */
function initializeMathematicalTypesetting() {
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }
}
