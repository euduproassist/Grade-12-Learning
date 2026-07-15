/**
 * ==========================================================================
 * Grade 12 Learning - Mathematics Data & Workspace Engine (math.js)
 * Architecture: Clean, modular, fully decoupled database schema
 * Quality Standards: Strict zero-overflow layout, fluid viewport handling.
 * ==========================================================================
 */

// 1. DATA REPOSITORY: High-Fidelity Mathematics Curated Dataset (Paper 1 & Paper 2)
const mathematicsDatabase = {
    paper1: {
        meta: {
            title: "Mathematics – 2025 Paper 1",
            section: "Section A: Algebra & Equations"
        },
        questions: [
            {
                id: "1.1",
                label: "Question 1.1",
                marks: 2,
                rawText: "Simplify the expression completely:",
                mathExpression: "\\frac{2x^2 - 8x}{2x}",
                finalAnswer: "x - 4 \\quad \\text{where } x \\neq 0",
                steps: [
                    {
                        number: 1,
                        instruction: "Factor out the greatest common term (GCF) from the numerator expression.",
                        math: [
                            "\\text{Given expression: } \\frac{2x^2 - 8x}{2x}",
                            "\\text{Extract } 2x \\text{ from the numerator terms:}",
                            "2x^2 - 8x = 2x(x - 4)"
                        ]
                    },
                    {
                        number: 2,
                        instruction: "Divide both numerator and denominator by the common factor to reduce to simplest form.",
                        math: [
                            "\\frac{2x(x - 4)}{2x}",
                            "\\text{Cancel out the factor of } 2x:",
                            "x - 4 \\quad (\\text{assuming } x \\neq 0)"
                        ]
                    }
                ],
                tip: {
                    title: "Simplification Tip",
                    text: "Always factor out variables before attempting fraction cancellations. Never cross cancel raw singular terms across adding or subtracting structures."
                }
            },
            {
                id: "1.2",
                label: "Question 1.2",
                marks: 3,
                rawText: "Solve for $x$:",
                mathExpression: "x^2 - 5x + 6 = 0",
                finalAnswer: "x = 2 \\quad \\text{or} \\quad x = 3",
                steps: [
                    {
                        number: 1,
                        instruction: "Determine algebraic factors that multiply to equal the constant +6 and sum up to get the linear coefficient -5.",
                        math: [
                            "x^2 - 5x + 6 = 0",
                            "\\text{The factors of } +6 \\text{ that add up to } -5 \\text{ are } -2 \\text{ and } -3:",
                            "(x - 2)(x - 3) = 0"
                        ]
                    },
                    {
                        number: 2,
                        instruction: "Set each factor independently to zero applying the zero product property theorem.",
                        math: [
                            "x - 2 = 0 \\implies x = 2",
                            "\\text{or}",
                            "x - 3 = 0 \\implies x = 3"
                        ]
                    }
                ],
                tip: {
                    title: "Factorization Rule",
                    text: "If the constant term is positive and middle coefficient is negative, then both factors in your brackets must be negative."
                }
            },
            {
                id: "1.3",
                label: "Question 1.3",
                marks: 6,
                rawText: "Solve for $x$ and $y$ simultaneously:",
                mathExpression: "y = x - 3 \\quad \\text{and} \\quad x^2 + y^2 = 9",
                finalAnswer: "(0; -3) \\quad \\text{and} \\quad (3; 0)",
                steps: [
                    {
                        number: 1,
                        instruction: "Identify and structure both initial equations to prepare for mathematical substitution.",
                        math: [
                            "\\text{Equation (1): } y = x - 3",
                            "\\text{Equation (2): } x^2 + y^2 = 9"
                        ]
                    },
                    {
                        number: 2,
                        instruction: "Substitute Equation (1) into Equation (2) to eliminate variable y and establish a single quadratic equation in terms of x.",
                        math: [
                            "x^2 + (x - 3)^2 = 9",
                            "\\text{Expand the binomial bracket completely:}",
                            "x^2 + (x^2 - 6x + 9) = 9",
                            "2x^2 - 6x + 9 = 9"
                        ]
                    },
                    {
                        number: 3,
                        instruction: "Standardize the quadratic form by subtracting 9 from both sides and factoring to find the roots of x.",
                        math: [
                            "2x^2 - 6x = 0",
                            "\\text{Factor out the common term } 2x:",
                            "2x(x - 3) = 0",
                            "\\implies x = 0 \\quad \\text{or} \\quad x = 3"
                        ]
                    },
                    {
                        number: 4,
                        instruction: "Substitute each x value back into Equation (1) to solve for the matching y coordinate positions.",
                        math: [
                            "\\text{Case 1: If } x = 0:",
                            "y = 0 - 3 = -3 \\implies (0; -3)",
                            "\\text{Case 2: If } x = 3:",
                            "y = 3 - 3 = 0 \\implies (3; 0)"
                        ]
                    }
                ],
                tip: {
                    title: "Simultaneous Equations Tip",
                    text: "Always use the simpler linear equation to isolate a variable first, then substitute it into the complex quadratic system."
                }
            },
            {
                id: "1.4",
                label: "Question 1.4",
                marks: 4,
                rawText: "Solve for $x$, correct to two decimal places:",
                mathExpression: "3x^2 - 2x - 7 = 0",
                finalAnswer: "x \\approx 1.90 \\quad \\text{or} \\quad x \\approx -1.23",
                steps: [
                    {
                        number: 1,
                        instruction: "Recall and state the standard quadratic formula since the equation cannot factorize nicely using integers.",
                        math: [
                            "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
                            "\\text{Identify the constant parameters: } a = 3, \\; b = -2, \\; c = -7"
                        ]
                    },
                    {
                        number: 2,
                        instruction: "Substitute the identified constant values into the general formula and calculate the discriminant.",
                        math: [
                            "x = \\frac{-(-2) \\pm \\sqrt{(-2)^2 - 4(3)(-7)}}{2(3)}",
                            "x = \\frac{2 \\pm \\sqrt{4 + 84}}{6}",
                            "x = \\frac{2 \\pm \\sqrt{88}}{6}"
                        ]
                    },
                    {
                        number: 3,
                        instruction: "Evaluate the separate calculations for both additions and subtractions, rounding answers to two decimal places.",
                        math: [
                            "x = \\frac{2 + \\sqrt{88}}{6} \\approx 1.90",
                            "\\text{or}",
                            "x = \\frac{2 - \\sqrt{88}}{6} \\approx -1.23"
                        ]
                    }
                ],
                tip: {
                    title: "Rounding Precaution",
                    text: "Always write down the unrounded surd first before computing decimal outputs to prevent premature approximation bugs."
                }
            },
            {
                id: "1.5",
                label: "Question 1.5",
                marks: 3,
                rawText: "Solve for $x$ in the inequality below:",
                mathExpression: "(2x - 3)(x + 1) > 0",
                finalAnswer: "x < -1 \\quad \\text{or} \\quad x > \\frac{3}{2}",
                steps: [
                    {
                        number: 1,
                        instruction: "Identify and solve for critical boundary points by momentarily equating the factors to zero.",
                        math: [
                            "(2x - 3)(x + 1) = 0",
                            "\\text{Critical values:}",
                            "x = \\frac{3}{2} \\quad \\text{and} \\quad x = -1"
                        ]
                    },
                    {
                        number: 2,
                        instruction: "Apply interval test analysis or parabola plotting to observe intervals where equation products are strictly positive.",
                        math: [
                            "\\text{Since the quadratic term } 2x^2 \\text{ is positive, the parabola opens upwards.}",
                            "\\text{The graph is positive (>0) outside the roots region:}",
                            "\\text{Left region: } x < -1",
                            "\\text{Right region: } x > \\frac{3}{2}"
                        ]
                    }
                ],
                tip: {
                    title: "Inequality Direction Advice",
                    text: "For a standard 'greater than' (> 0) inequality, the answers will split away outwards from your critical values."
                }
            },
            {
                id: "1.6",
                label: "Question 1.6",
                marks: 4,
                rawText: "Simplify the expression with exponents completely:",
                mathExpression: "\\frac{3^{x+1} \\cdot 9^{x-2}}{27^{x-1}}",
                finalAnswer: "1",
                steps: [
                    {
                        number: 1,
                        instruction: "Decompose all composite base numbers into prime exponential structures base 3.",
                        math: [
                            "\\text{Note basic base parameters: } 9 = 3^2 \\quad \\text{and} \\quad 27 = 3^3",
                            "\\text{Substitute bases: } \\frac{3^{x+1} \\cdot (3^2)^{x-2}}{(3^3)^{x-1}}"
                        ]
                    },
                    {
                        number: 2,
                        instruction: "Distribute indices inside factors and combine exponents using basic laws of powers.",
                        math: [
                            "\\frac{3^{x+1} \\cdot 3^{2x-4}}{3^{3x-3}}",
                            "\\text{Combine product terms in numerator: } 3^{(x+1) + (2x-4)} = 3^{3x-3}"
                        ]
                    },
                    {
                        number: 3,
                        instruction: "Divide expressions by subtracting power parameters to derive the final evaluation base 3.",
                        math: [
                            "\\frac{3^{3x-3}}{3^{3x-3}} = 3^{(3x-3) - (3x-3)}",
                            "3^0 = 1"
                        ]
                    }
                ],
                tip: {
                    title: "Exponent Laws Reminders",
                    text: "Remember that any mathematical term raised to the power of 0 always equals 1 ($a^0 = 1$)."
                }
            }
        ]
    },
    paper2: {
        meta: {
            title: "Mathematics – 2025 Paper 2",
            section: "Section A: Trigonometry & Geometry"
        },
        questions: [
            {
                id: "2.1",
                label: "Question 2.1",
                marks: 4,
                rawText: "Mathematics Paper 2 features are currently preparation prototypes.",
                mathExpression: "\\cos^2(\\theta) + \\sin^2(\\theta) = 1",
                finalAnswer: "Prototype \\; Mode",
                steps: [
                    {
                        number: 1,
                        instruction: "This serves as a visual placeholder for Paper 2 solutions.",
                        math: [
                            "\\text{Paper 2 contains complex geometry, analytical theorems, and trigonometry topics.}"
                        ]
                    }
                ],
                tip: {
                    title: "Under Development",
                    text: "These details are currently undergoing curriculum validation checks before release."
                }
            }
        ]
    }
};

// 2. CONTROLLER SYSTEM & VIEW SWITCHING MANAGER
class MathAppController {
    constructor() {
        this.activePaper = "paper1"; // default setup
        this.selectedQuestionId = null;
        this.initDOMElements();
        this.attachEventListeners();
        this.renderQuestionsList();
    }

    initDOMElements() {
        // App Core Containers
        this.questionsGalleryView = document.getElementById("questionsGalleryView");
        this.stepWorkspaceView = document.getElementById("stepWorkspaceView");
        this.questionsStream = document.getElementById("questionsInjectionStream");
        this.activeSectionTitle = document.getElementById("activeSectionTitle");

        // Workspace Specific Hooks
        this.workspaceBackBtn = document.getElementById("workspaceBackBtn");
        this.homeLogoBtn = document.getElementById("homeLogoBtn");
        this.workspaceHeaderContainer = document.getElementById("workspaceHeaderContainer");
        this.answerValueBlock = document.getElementById("answerValueBlock");
        this.stepsContainer = document.getElementById("stepsInjectedContainer");
        this.tipBoxContainer = document.getElementById("tipBoxContainer");
    }

    attachEventListeners() {
        // Navigation clicks
        this.workspaceBackBtn.addEventListener("click", () => this.switchView("gallery"));
        this.homeLogoBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.switchView("gallery");
        });
    }

    // Switch dynamic view state
    switchView(viewTarget) {
        if (viewTarget === "gallery") {
            this.stepWorkspaceView.classList.remove("is-active");
            this.questionsGalleryView.classList.add("is-active");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (viewTarget === "workspace") {
            this.questionsGalleryView.classList.remove("is-active");
            this.stepWorkspaceView.classList.add("is-active");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    // Swaps source databases between Paper 1 and Paper 2
    changePaperChannel(paperNum) {
        this.activePaper = `paper${paperNum}`;
        const activePaperData = mathematicsDatabase[this.activePaper];
        
        // Update view title and lists dynamically
        this.activeSectionTitle.textContent = activePaperData.meta.section;
        this.renderQuestionsList();
    }

    // Render loop injecting list questions
    renderQuestionsList() {
        this.questionsStream.innerHTML = "";
        const paperData = mathematicsDatabase[this.activePaper];

        paperData.questions.forEach(question => {
            const cardElement = document.createElement("article");
            cardElement.className = "question-item-card";
            cardElement.innerHTML = `
                <div class="question-flex-body">
                    <div class="question-content-left">
                        <span class="question-index-number">${question.id}</span>
                        <div class="question-text-content">
                            ${question.rawText}
                            <span class="math-typeset-wrapper">$$${question.mathExpression}$$</span>
                        </div>
                    </div>
                    <div class="question-elements-right">
                        <span class="points-weight-pill">(${question.marks} Marks)</span>
                        <div class="question-actions-toolbar">
                            <button class="action-button action-button-outline" data-id="${question.id}">View Answer</button>
                        </div>
                    </div>
                </div>
            `;

            // Setup direct click action listeners
            cardElement.querySelector(".action-button-outline").addEventListener("click", () => {
                this.loadWorkspaceSolution(question.id);
            });

            this.questionsStream.appendChild(cardElement);
        });

        // Re-compile Math Jax / KaTeX expressions
        initializeMathEngines();
    }

    // Load detailed walkthrough workspace view
    loadWorkspaceSolution(questionId) {
        this.selectedQuestionId = questionId;
        const paperData = mathematicsDatabase[this.activePaper];
        const question = paperData.questions.find(q => q.id === questionId);

        if (!question) return;

        // Reset display structures
        const answerBox = document.getElementById("answerValueBlock");
        const toggleBtn = document.getElementById("toggleAnswerBtn");
        const toggleText = document.getElementById("toggleText");
        answerBox.style.display = "flex";
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleText.textContent = "Hide Answer";

        // Build workspace sub header
        this.workspaceHeaderContainer.innerHTML = `
            <span class="workspace-sub-label">${question.label}</span>
            <span class="workspace-sub-equation">${question.rawText} &nbsp; $${question.mathExpression}$</span>
            <span class="workspace-sub-marks">(${question.marks} Marks)</span>
        `;

        // Inject final answer box details
        this.answerValueBlock.innerHTML = `
            <span class="final-answer-pill">Final Answer</span>
            <span class="final-answer-math">$${question.finalAnswer}$</span>
        `;

        // Clear dynamic elements prior to loop injection
        this.stepsContainer.innerHTML = "";

        // Build step layouts
        question.steps.forEach(step => {
            const stepRow = document.createElement("section");
            stepRow.className = "step-row";
            stepRow.setAttribute("aria-label", `Solution Step ${step.number} Details`);

            // Compile secondary mathematical statements
            let compiledMathBlocks = "";
            step.math.forEach(mathBlock => {
                compiledMathBlocks += `<div>$$${mathBlock}$$</div>`;
            });

            stepRow.innerHTML = `
                <div class="step-header-container">
                    <div class="step-title-left">
                        <div class="step-badge-number">${step.number}</div>
                        <h3 class="step-instruction-text">${step.instruction}</h3>
                    </div>
                    <span class="step-pill-indicator">Step ${step.number}</span>
                </div>
                <div class="solution-math-container">
                    ${compiledMathBlocks}
                </div>
            `;

            this.stepsContainer.appendChild(stepRow);
        });

        // Inject active advisory tips
        this.tipBoxContainer.innerHTML = `
            <div class="tip-icon-box">
                <svg viewBox="0 0 24 24">
                    <path d="M9 21h6M9 18h6M10 15H14M12 2a7 7 0 0 1 7 7c0 2.5-2 4.85-3 5.5s-1.5 2.5-1.5 2.5H9.5s-.5-1.85-1.5-2.5-3-3-3-5.5a7 7 0 0 1 7-7z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="tip-text-content">
                <strong>${question.tip.title}</strong>
                ${question.tip.text}
            </div>
        `;

        // Switch workspace layout view active
        this.switchView("workspace");

        // Re-execute KaTeX typeset processing on injected blocks
        initializeMathEngines();
    }
}

// 3. COLLAPSIBLE NAV-ACCORDION ENGINE
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

// Active segmented tab swapper logic
function switchPaperChannel(paperNumber, clickedButtonElement) {
    const innerPanel = clickedButtonElement.parentElement;
    innerPanel.querySelectorAll('.segmented-tab-btn').forEach(button => {
        button.classList.remove('is-active');
    });
    clickedButtonElement.classList.add('is-active');
    
    // Notify controller to toggle database
    if (window.appInstance) {
        window.appInstance.changePaperChannel(paperNumber);
    }
}

// Answer Panel dynamic toggle visibility switches
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

// 4. KATEX MATHEMATICAL ENGINES INITIALIZER
function initializeMathEngines() {
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

// 5. BOOT ENGINE INSTANTIATOR
document.addEventListener("DOMContentLoaded", () => {
    window.appInstance = new MathAppController();
});
