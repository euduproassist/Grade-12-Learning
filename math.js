/* ==========================================================================
   1. EXHAUSTIVE, HIGH-VOLUME SOLUTION MANIFEST DATABASE (MATHEMATICS PAPER 1)
   ========================================================================== */
const questionsDatabase = {
    '1.1': {
        index: "1.1",
        equation: "Simplify the expression completely: \\quad \\frac{2x^2 - 8x}{2x}",
        marks: "(2 Marks)",
        finalAnswer: "x - 4 \\quad (x \\neq 0)",
        tipText: "Always identify and factor out the Greatest Common Divisor (GCD) in the algebraic numerator first to ensure clean cancellation without dividing by zero errors.",
        steps: [
            {
                number: 1,
                instruction: "Determine and factor out the common term $2x$ from the algebraic terms in the numerator.",
                mathHtml: `
                    <div>$$\\text{Given: } \\frac{2x^2 - 8x}{2x}$$</div>
                    <div>$$\\text{Factor out } 2x \\text{ from } (2x^2 - 8x):$$</div>
                    <div>$$2x^2 - 8x = 2x(x - 4)$$</div>
                `
            },
            {
                number: 2,
                instruction: "Substitute the factored expression back into the numerator of the rational term.",
                mathHtml: `
                    <div>$$\\frac{2x(x - 4)}{2x}$$</div>
                `
            },
            {
                number: 3,
                instruction: "Divide both numerator and denominator by the common factor of $2x$ while specifying the restriction.",
                mathHtml: `
                    <div>$$\\frac{2x(x - 4)}{2x} = x - 4$$</div>
                    <div>$$\\text{Note: } x \\neq 0 \\text{ as the original expression is undefined at } x = 0.$$</div>
                `
            }
        ]
    },
    '1.2': {
        index: "1.2",
        equation: "Solve for $x$: \\quad x^2 - 5x + 6 = 0",
        marks: "(3 Marks)",
        finalAnswer: "x = 2 \\quad \\text{or} \\quad x = 3",
        tipText: "Look for two integers that multiply to give the constant value (+6) and add up to give the coefficient of the middle term (-5). Since the constant is positive and the middle term is negative, both factors must be negative.",
        steps: [
            {
                number: 1,
                instruction: "Factor the quadratic trinomial by finding elements that sum to $-5$ and multiply to $+6$.",
                mathHtml: `
                    <div>$$x^2 - 5x + 6 = 0$$</div>
                    <div>$$\\text{The factors are } -2 \\text{ and } -3:$$</div>
                    <div>$$(x - 2)(x - 3) = 0$$</div>
                `
            },
            {
                number: 2,
                instruction: "Apply the Zero Factor Property, which states that if $a \\cdot b = 0$, then $a = 0$ or $b = 0$.",
                mathHtml: `
                    <div>$$x - 2 = 0 \\quad \\text{or} \\quad x - 3 = 0$$</div>
                `
            },
            {
                number: 3,
                instruction: "Isolate the variable $x$ in each equation to find the actual roots of the quadratic equation.",
                mathHtml: `
                    <div>$$x = 2 \\quad \\text{or} \\quad x = 3$$</div>
                `
            }
        ]
    },
    '1.3': {
        index: "1.3",
        equation: "Solve for $x$ and $y$ simultaneously: \\quad y = x - 3 \\quad \\text{and} \\quad x^2 + y^2 = 9",
        marks: "(6 Marks)",
        finalAnswer: "(0; -3) \\quad \\text{and} \\quad (3; 0)",
        tipText: "When substituting the linear equation into the quadratic equation, make sure you expand the squared binomial term $(x - 3)^2$ completely as $x^2 - 6x + 9$. Do not make the mistake of expanding it to just $x^2 + 9$.",
        steps: [
            {
                number: 1,
                instruction: "Identify and structure the system of simultaneous equations.",
                mathHtml: `
                    <div>$$\\text{Equation (1): } y = x - 3$$</div>
                    <div>$$\\text{Equation (2): } x^2 + y^2 = 9$$</div>
                `
            },
            {
                number: 2,
                instruction: "Substitute Equation (1) into Equation (2) to eliminate the variable $y$.",
                mathHtml: `
                    <div>$$x^2 + (x - 3)^2 = 9$$</div>
                `
            },
            {
                number: 3,
                instruction: "Expand the binomial term and write the quadratic equation in standard form ($ax^2 + bx + c = 0$).",
                mathHtml: `
                    <div>$$x^2 + (x^2 - 6x + 9) = 9$$</div>
                    <div>$$2x^2 - 6x + 9 - 9 = 0$$</div>
                    <div>$$2x^2 - 6x = 0$$</div>
                `
            },
            {
                number: 4,
                instruction: "Factorize the quadratic expression by finding the highest common factor.",
                mathHtml: `
                    <div>$$2x(x - 3) = 0$$</div>
                `
            },
            {
                number: 5,
                instruction: "Solve for the two possible values of $x$.",
                mathHtml: `
                    <div>$$2x = 0 \\implies x = 0$$</div>
                    <div>$$\\text{or}$$</div>
                    <div>$$x - 3 = 0 \\implies x = 3$$</div>
                `
            },
            {
                number: 6,
                instruction: "Substitute each $x$ value back into Equation (1) to solve for the matching $y$ values.",
                mathHtml: `
                    <div>$$\\text{For } x = 0:$$</div>
                    <div>$$y = 0 - 3 = -3 \\implies (0; -3)$$</div>
                    <br>
                    <div>$$\\text{For } x = 3:$$</div>
                    <div>$$y = 3 - 3 = 0 \\implies (3; 0)$$</div>
                `
            }
        ]
    },
    '1.4': {
        index: "1.4",
        equation: "Solve for $x$ (correct to two decimal places): \\quad 3x^2 - 2x - 7 = 0",
        marks: "(4 Marks)",
        finalAnswer: "x \\approx 1.90 \\quad \\text{or} \\quad x \\approx -1.23",
        tipText: "The instruction 'correct to two decimal places' is a key clue that the quadratic trinomial cannot be factorized using rational numbers. Always use the quadratic formula directly in these instances.",
        steps: [
            {
                number: 1,
                instruction: "Identify the coefficients $a$, $b$, and $c$ from the standard quadratic equation $ax^2 + bx + c = 0$.",
                mathHtml: `
                    <div>$$a = 3, \\quad b = -2, \\quad c = -7$$</div>
                `
            },
            {
                number: 2,
                instruction: "State the quadratic formula and substitute the identified coefficients correctly.",
                mathHtml: `
                    <div>$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$</div>
                    <div>$$x = \\frac{-(-2) \\pm \\sqrt{(-2)^2 - 4(3)(-7)}}{2(3)}$$</div>
                `
            },
            {
                number: 3,
                instruction: "Simplify the arithmetic operations under the radical sign.",
                mathHtml: `
                    <div>$$x = \\frac{2 \\pm \\sqrt{4 - (-84)}}{6}$$</div>
                    <div>$$x = \\frac{2 \\pm \\sqrt{88}}{6}$$</div>
                `
            },
            {
                number: 4,
                instruction: "Calculate the two individual solutions using a calculator and round each to exactly two decimal places.",
                mathHtml: `
                    <div>$$x = \\frac{2 + \\sqrt{88}}{6} \\approx 1.90$$</div>
                    <div>$$\\text{or}$$</div>
                    <div>$$x = \\frac{2 - \\sqrt{88}}{6} \\approx -1.23$$</div>
                `
            }
        ]
    },
    '1.5': {
        index: "1.5",
        equation: "Solve for $x$ in the inequality below: \\quad (2x - 3)(x + 1) > 0",
        marks: "(3 Marks)",
        finalAnswer: "x < -1 \\quad \\text{or} \\quad x > \\frac{3}{2}",
        tipText: "Since the product of the two brackets must be strictly positive (greater than 0), the solution lies outside of the critical values. On a graph, this corresponds to the regions where the parabola lies above the x-axis.",
        steps: [
            {
                number: 1,
                instruction: "Determine the critical boundary values by setting the inequality equation equal to zero.",
                mathHtml: `
                    <div>$$(2x - 3)(x + 1) = 0$$</div>
                    <div>$$2x - 3 = 0 \\implies x = \\frac{3}{2}$$</div>
                    <div>$$x + 1 = 0 \\implies x = -1$$</div>
                    <div>$$\\text{Critical Values: } x = -1 \\quad \\text{and} \\quad x = \\frac{3}{2}$$</div>
                `
            },
            {
                number: 2,
                instruction: "Analyze the intervals created by the critical values using test values or graphical analysis.",
                mathHtml: `
                    <div>$$\\text{For } x < -1: \\quad (\\text{negative}) \\times (\\text{negative}) > 0 \\quad \\text{(Valid)}$$</div>
                    <div>$$\\text{For } -1 < x < \\frac{3}{2}: \\quad (\\text{negative}) \\times (\\text{positive}) < 0 \\quad \\text{(Invalid)}$$</div>
                    <div>$$\\text{For } x > \\frac{3}{2}: \\quad (\\text{positive}) \\times (\\text{positive}) > 0 \\quad \\text{(Valid)}$$</div>
                `
            },
            {
                number: 3,
                instruction: "Write down the final inequality solution expressing the correct regions.",
                mathHtml: `
                    <div>$$x < -1 \\quad \\text{or} \\quad x > \\frac{3}{2}$$</div>
                `
            }
        ]
    },
    '1.6': {
        index: "1.6",
        equation: "Simplify the expression with exponents completely: \\quad \\frac{3^{x+1} \\cdot 9^{x-2}}{27^{x-1}}",
        marks: "(4 Marks)",
        finalAnswer: "1",
        tipText: "Express all composite numbers ($9$ and $27$) in terms of their prime bases first. Once all bases are identical, apply the exponential laws: add powers when multiplying, and subtract powers when dividing.",
        steps: [
            {
                number: 1,
                instruction: "Convert all bases in the expression to base 3.",
                mathHtml: `
                    <div>$$9 = 3^2 \\quad \\text{and} \\quad 27 = 3^3$$</div>
                    <div>$$\\text{Substitute these values:}$$</div>
                    <div>$$\\frac{3^{x+1} \\cdot (3^2)^{x-2}}{(3^3)^{x-1}}$$</div>
                `
            },
            {
                number: 2,
                instruction: "Apply the power-of-a-power law $(a^m)^n = a^{mn}$ to remove the brackets.",
                mathHtml: `
                    <div>$$\\frac{3^{x+1} \\cdot 3^{2(x-2)}}{3^{3(x-1)}}$$</div>
                    <div>$$\\frac{3^{x+1} \\cdot 3^{2x-4}}{3^{3x-3}}$$</div>
                `
            },
            {
                number: 3,
                instruction: "Simplify the numerator by adding exponents according to the multiplication law $a^m \\cdot a^n = a^{m+n}$.",
                mathHtml: `
                    <div>$$\\frac{3^{(x+1) + (2x-4)}}{3^{3x-3}}$$</div>
                    <div>$$\\frac{3^{3x-3}}{3^{3x-3}}$$</div>
                `
            },
            {
                number: 4,
                instruction: "Apply the quotient law of exponents $\\frac{a^m}{a^n} = a^{m-n}$ to complete the simplification.",
                mathHtml: `
                    <div>$$3^{(3x-3) - (3x-3)} = 3^0$$</div>
                    <div>$$\\text{Since } a^0 = 1 \\text{ (where } a \\neq 0\\text{):}$$</div>
                    <div>$$3^0 = 1$$</div>
                `
            }
        ]
    }
};

/* ==========================================================================
   2. DOM ELEMENT HOOKS & UI TARGETS
   ========================================================================== */
const questionsTargetContainer = document.getElementById('questionsTargetContainer');
const questionListView = document.getElementById('questionListView');
const solutionDetailsView = document.getElementById('solutionDetailsView');

const solutionHeaderBox = document.getElementById('solutionHeaderBox');
const answerValueBlock = document.getElementById('answerValueBlock');
const solutionStepsStack = document.getElementById('solutionStepsStack');
const advisoryTipTarget = document.getElementById('advisoryTipTarget');

/* ==========================================================================
   3. RENDERING ENGINE FOR THE PRIMARY QUESTION GALLERY LIST
   ========================================================================== */
function buildQuestionListMarkup() {
    questionsTargetContainer.innerHTML = ''; // Clear prior entries
    
    // Loop systematically through all database indexes
    Object.keys(questionsDatabase).forEach(key => {
        const item = questionsDatabase[key];
        
        const card = document.createElement('article');
        card.className = 'question-item-card';
        
        card.innerHTML = `
            <div class="question-flex-body">
                <div class="question-content-left">
                    <span class="question-index-number">${item.index}</span>
                    <div class="question-text-content">
                        ${item.equation.includes('Solve') || item.equation.includes('Simplify') ? item.equation : 'Solve for $x$: &nbsp; $' + item.equation + '$'}
                    </div>
                </div>
                <div class="question-elements-right">
                    <span class="points-weight-pill">${item.marks}</span>
                    <div class="question-actions-toolbar">
                        <button class="action-button action-button-outline" onclick="presentDetailedSolution('${item.index}')">View Answer</button>
                    </div>
                </div>
            </div>
        `;
        
        questionsTargetContainer.appendChild(card);
    });

    initializeMathematicalEngines();
}

/* ==========================================================================
   4. STEP-BY-STEP PAGE TRANSITION ENGINE (NO POPUPS - FULL DISPLAY SCREEN)
   ========================================================================== */
function presentDetailedSolution(indexId) {
    const questionObject = questionsDatabase[indexId];
    if (!questionObject) return;

    // Reset visibility toggle state
    const toggleBtn = document.getElementById('toggleAnswerBtn');
    const toggleText = document.getElementById('toggleText');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleText.textContent = 'Hide Answer';
    
    // Inject solution layout elements
    solutionHeaderBox.innerHTML = `
        <span class="question-badge">Question ${questionObject.index}</span>
        <span class="question-statement-equation">${questionObject.equation}</span>
        <span class="question-marks-weight">${questionObject.marks}</span>
    `;

    answerValueBlock.style.display = 'flex';
    answerValueBlock.innerHTML = `
        <span class="final-answer-badge-pill">Final Answer</span>
        <span class="final-answer-math-box">$${questionObject.finalAnswer}$</span>
    `;

    // Process steps loop cleanly
    let stepRowsMarkup = '';
    questionObject.steps.forEach(step => {
        stepRowsMarkup += `
            <section class="step-row" aria-label="Solution Step ${step.number} Details">
                <div class="step-header-group">
                    <div class="step-title-wrapper">
                        <div class="step-circle-badge">${step.number}</div>
                        <h3 class="step-instruction-description">${step.instruction}</h3>
                    </div>
                    <span class="step-pill-tag">Step ${step.number}</span>
                </div>
                <div class="solution-math-viewport">
                    ${step.mathHtml}
                </div>
            </section>
        `;
    });
    solutionStepsStack.innerHTML = stepRowsMarkup;

    // Inject Tip Box
    advisoryTipTarget.innerHTML = `
        <aside class="advisory-tip-container" aria-label="Formula Solving Advice Tip Box">
            <div class="advisory-tip-icon-box">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 21h6M9 18h6M10 15H14M12 2a7 7 0 0 1 7 7c0 2.5-2 4.85-3 5.5s-1.5 2.5-1.5 2.5H9.5s-.5-1.85-1.5-2.5-3-3-3-5.5a7 7 0 0 1 7-7z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="advisory-tip-text">
                <strong>Tip</strong>
                ${questionObject.tipText}
            </div>
        </aside>
    `;

    // Perform the layout transition animation cleanly
    questionListView.classList.remove('is-active');
    
    setTimeout(() => {
        solutionDetailsView.classList.add('is-active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        initializeMathematicalEngines();
    }, 150);
}

/* ==========================================================================
   5. NAVIGATION AND STATE TOGGLES
   ========================================================================== */
function navigateBackToList() {
    solutionDetailsView.classList.remove('is-active');
    
    setTimeout(() => {
        questionListView.classList.add('is-active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        initializeMathematicalEngines();
    }, 150);
}

function toggleAnswerContainer() {
    const answerBox = document.getElementById('answerValueBlock');
    const toggleButton = document.getElementById('toggleAnswerBtn');
    const toggleText = document.getElementById('toggleText');
    
    if (answerBox.style.display === 'none') {
        answerBox.style.display = 'flex';
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleText.textContent = 'Hide Answer';
        toggleButton.querySelector('svg').outerHTML = `
            <svg style="width:16px; height:16px; fill:currentColor;" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        `;
    } else {
        answerBox.style.display = 'none';
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleText.textContent = 'Show Answer';
        toggleButton.querySelector('svg').outerHTML = `
            <svg style="width:16px; height:16px; fill:currentColor;" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12c-2.5 0-4.5-2-4.5-4.5S9.5 7.5 12 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
            </svg>
        `;
    }
}

// Collapsible Accordion Manager for the Papers header
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

// Segment selector active tab visual toggler
function switchPaperChannel(paperNumber, clickedButtonElement) {
    const innerPanel = clickedButtonElement.parentElement;
    innerPanel.querySelectorAll('.segmented-tab-btn').forEach(button => {
        button.classList.remove('is-active');
    });
    clickedButtonElement.classList.add('is-active');
}

// Typeset render handler for parsing math markup configurations
function initializeMathematicalEngines() {
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

/* ==========================================================================
   6. APP INITIALIZATION TRIGGER
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    buildQuestionListMarkup();
});
