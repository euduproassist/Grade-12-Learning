/**
 * ==========================================================================
 * GRADE 12 PORTAL CONTROLLER & APPLICATION STATE
 * ==========================================================================
 */

// Comprehensive structural subject schema containing precise layout and data matching your assets
const subjectsDatabase = {
    "mathematics": {
        title: "Mathematics",
        description: "Choose a year and exam paper to start learning with step-by-step video explanations.",
        svgIcon: `<svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h3l3 9 6-17h6" stroke="#1d68f2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 14l4 4m0-4l-4 4" stroke="#1d68f2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`,
        years: [
            { id: "math-2025", value: "2025", isLatest: true, paper1Url: "#/math/2025/p1", paper2Url: "#/math/2025/p2" },
            { id: "math-2024", value: "2024", isLatest: false, paper1Url: "#/math/2024/p1", paper2Url: "#/math/2024/p2" },
            { id: "math-2023", value: "2023", isLatest: false, paper1Url: "#/math/2023/p1", paper2Url: "#/math/2023/p2" },
            { id: "math-2022", value: "2022", isLatest: false, paper1Url: "#/math/2022/p1", paper2Url: "#/math/2022/p2" },
            { id: "math-2021", value: "2021", isLatest: false, paper1Url: "#/math/2021/p1", paper2Url: "#/math/2021/p2" },
            { id: "math-2020", value: "2020", isLatest: false, paper1Url: "#/math/2020/p1", paper2Url: "#/math/2020/p2" },
            { id: "math-2019", value: "2019", isLatest: false, paper1Url: "#/math/2019/p1", paper2Url: "#/math/2019/p2" },
            { id: "math-2018", value: "2018", isLatest: false, paper1Url: "#/math/2018/p1", paper2Url: "#/math/2018/p2" },
            { id: "math-2017", value: "2017", isLatest: false, paper1Url: "#/math/2017/p1", paper2Url: "#/math/2017/p2" },
            { id: "math-2016", value: "2016 and Older", isLatest: false, paper1Url: "#/math/2016/p1", paper2Url: "#/math/2016/p2" }
        ]
    },
    "physical-sciences": {
        title: "Physical Sciences",
        description: "Step-by-step solutions to help you understand and excel in Physical Sciences past exams.",
        svgIcon: `<svg viewBox="0 0 24 24" fill="none">
                    <path d="M6 3h12M12 3v13M10 12h4M5 21h14M7 3l4.5 9.5a1 1 0 0 1 0 1L7 21h10l-4.5-7.5a1 1 0 0 1 0-1L17 3H7z" stroke="#1d68f2" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`,
        years: [
            { id: "phys-2025", value: "2025", isLatest: true, paper1Url: "#/phys/2025/p1", paper2Url: "#/phys/2025/p2" },
            { id: "phys-2024", value: "2024", isLatest: false, paper1Url: "#/phys/2024/p1", paper2Url: "#/phys/2024/p2" },
            { id: "phys-2023", value: "2023", isLatest: false, paper1Url: "#/phys/2023/p1", paper2Url: "#/phys/2023/p2" },
            { id: "phys-2022", value: "2022", isLatest: false, paper1Url: "#/phys/2022/p1", paper2Url: "#/phys/2022/p2" },
            { id: "phys-2021", value: "2021", isLatest: false, paper1Url: "#/phys/2021/p1", paper2Url: "#/phys/2021/p2" },
            { id: "phys-2020", value: "2020", isLatest: false, paper1Url: "#/phys/2020/p1", paper2Url: "#/phys/2020/p2" },
            { id: "phys-2019", value: "2019", isLatest: false, paper1Url: "#/phys/2019/p1", paper2Url: "#/phys/2019/p2" },
            { id: "phys-2018", value: "2018", isLatest: false, paper1Url: "#/phys/2018/p1", paper2Url: "#/phys/2018/p2" },
            { id: "phys-2017", value: "2017", isLatest: false, paper1Url: "#/phys/2017/p1", paper2Url: "#/phys/2017/p2" },
            { id: "phys-2016", value: "2016 and Older", isLatest: false, paper1Url: "#/phys/2016/p1", paper2Url: "#/phys/2016/p2" }
        ]
    },
    "accounting": {
        title: "Accounting",
        description: "Detailed step-by-step explanations to strengthen your financial concepts and ledger bookkeeping.",
        svgIcon: `<svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" stroke="#1d68f2" stroke-width="2.2"/>
                    <line x1="8" y1="6" x2="16" y2="6" stroke="#1d68f2" stroke-width="2.2"/>
                    <line x1="16" y1="10" x2="16" y2="18" stroke="#1d68f2" stroke-width="2.2"/>
                    <circle cx="8" cy="11" r="1" fill="#1d68f2"/>
                    <circle cx="12" cy="11" r="1" fill="#1d68f2"/>
                    <circle cx="8" cy="15" r="1" fill="#1d68f2"/>
                    <circle cx="12" cy="15" r="1" fill="#1d68f2"/>
                  </svg>`,
        years: [
            { id: "acc-2025", value: "2025", isLatest: true, paper1Url: "#/accounting/2025/p1", paper2Url: "#/accounting/2025/p2" },
            { id: "acc-2024", value: "2024", isLatest: false, paper1Url: "#/accounting/2024/p1", paper2Url: "#/accounting/2024/p2" },
            { id: "acc-2023", value: "2023", isLatest: false, paper1Url: "#/accounting/2023/p1", paper2Url: "#/accounting/2023/p2" },
            { id: "acc-2022", value: "2022", isLatest: false, paper1Url: "#/accounting/2022/p1", paper2Url: "#/accounting/2022/p2" },
            { id: "acc-2021", value: "2021", isLatest: false, paper1Url: "#/accounting/2021/p1", paper2Url: "#/accounting/2021/p2" },
            { id: "acc-2020", value: "2020", isLatest: false, paper1Url: "#/accounting/2020/p1", paper2Url: "#/accounting/2020/p2" },
            { id: "acc-2019", value: "2019", isLatest: false, paper1Url: "#/accounting/2019/p1", paper2Url: "#/accounting/2019/p2" },
            { id: "acc-2018", value: "2018", isLatest: false, paper1Url: "#/accounting/2018/p1", paper2Url: "#/accounting/2018/p2" },
            { id: "acc-2017", value: "2017", isLatest: false, paper1Url: "#/accounting/2017/p1", paper2Url: "#/accounting/2017/p2" },
            { id: "acc-2016", value: "2016 and Older", isLatest: false, paper1Url: "#/accounting/2016/p1", paper2Url: "#/accounting/2016/p2" }
        ]
    },
    "mathematical-literacy": {
        title: "Mathematical Literacy",
        description: "Learn practical mathematical concepts step-by-step and improve your everyday problem-solving skills.",
        svgIcon: `<svg viewBox="0 0 24 24" fill="none">
                    <line x1="18" y1="20" x2="18" y2="10" stroke="#1d68f2" stroke-width="2.5"/>
                    <line x1="12" y1="20" x2="12" y2="4" stroke="#1d68f2" stroke-width="2.5"/>
                    <line x1="6" y1="20" x2="6" y2="14" stroke="#1d68f2" stroke-width="2.5"/>
                  </svg>`,
        years: [
            { id: "lit-2025", value: "2025", isLatest: true, paper1Url: "#/mathlit/2025/p1", paper2Url: "#/mathlit/2025/p2" },
            { id: "lit-2024", value: "2024", isLatest: false, paper1Url: "#/mathlit/2024/p1", paper2Url: "#/mathlit/2024/p2" },
            { id: "lit-2023", value: "2023", isLatest: false, paper1Url: "#/mathlit/2023/p1", paper2Url: "#/mathlit/2023/p2" },
            { id: "lit-2022", value: "2022", isLatest: false, paper1Url: "#/mathlit/2022/p1", paper2Url: "#/mathlit/2022/p2" },
            { id: "lit-2021", value: "2021", isLatest: false, paper1Url: "#/mathlit/2021/p1", paper2Url: "#/mathlit/2021/p2" },
            { id: "lit-2020", value: "2020", isLatest: false, paper1Url: "#/mathlit/2020/p1", paper2Url: "#/mathlit/2020/p2" },
            { id: "lit-2019", value: "2019", isLatest: false, paper1Url: "#/mathlit/2019/p1", paper2Url: "#/mathlit/2019/p2" },
            { id: "lit-2018", value: "2018", isLatest: false, paper1Url: "#/mathlit/2018/p1", paper2Url: "#/mathlit/2018/p2" },
            { id: "lit-2017", value: "2017", isLatest: false, paper1Url: "#/mathlit/2017/p1", paper2Url: "#/mathlit/2017/p2" },
            { id: "lit-2016", value: "2016 and Older", isLatest: false, paper1Url: "#/mathlit/2016/p1", paper2Url: "#/mathlit/2016/p2" }
        ]
    }
};

class PortalRouter {
    constructor() {
        this.dashboardView = document.getElementById('viewDashboard');
        this.detailView = document.getElementById('viewSubjectDetail');
        this.appRoot = document.getElementById('appRootContainer');
        
        // Dom References for updating the Subject Detail Accordions
        this.heroIconBox = document.getElementById('subjectHeroIcon');
        this.subjectTitleText = document.getElementById('subjectTitle');
        this.subjectDescText = document.getElementById('subjectDesc');
        this.accordionStack = document.getElementById('accordionStack');
    }

    /**
     * Toggles between dashboard view and chosen subject dynamic paper panels
     */
    selectSubject(subjectKey) {
        const subjectData = subjectsDatabase[subjectKey];
        if (!subjectData) return;

        // Render target subject details
        this.heroIconBox.innerHTML = subjectData.svgIcon;
        this.subjectTitleText.textContent = subjectData.title;
        this.subjectDescText.textContent = subjectData.description;

        // Render and inject the year accordions
        this.renderAccordions(subjectData.years, subjectData.title);

        // Transition views and set container width constraints cleanly
        this.dashboardView.classList.remove('is-active');
        this.detailView.classList.add('is-active');
        this.appRoot.classList.add('app-container-narrow');

        // Autoscroll viewport smoothly back to navigation peak
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Navigates back to the grid-selection portal dashboard
     */
    navigateHome(event) {
        if (event) event.preventDefault();
        
        this.detailView.classList.remove('is-active');
        this.dashboardView.classList.add('is-active');
        this.appRoot.classList.remove('app-container-narrow');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Generates semantic year accordion markup matching your design specification
     */
    renderAccordions(years, subjectName) {
        this.accordionStack.innerHTML = ''; // Clean screen stack completely

        years.forEach((year, index) => {
            const isExpanded = index === 0; // The first year item starts open by default
            const accordionItem = document.createElement('div');
            accordionItem.className = `accordion-item ${isExpanded ? 'is-expanded' : ''}`;
            accordionItem.id = year.id;

            // Generate HTML structured string mimicking your native CSS specifications
            accordionItem.innerHTML = `
                <button class="accordion-header" onclick="router.toggleAccordion('${year.id}')" aria-expanded="${isExpanded}">
                    <div class="accordion-header-left">
                        <div class="calendar-icon-box">
                            <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                        </div>
                        <span class="year-title">${year.value}</span>
                        ${year.isLatest ? '<span class="latest-badge">Latest</span>' : ''}
                    </div>
                    <svg class="accordion-trigger-icon" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="accordion-content-panel" style="${isExpanded ? 'max-height: 300px;' : ''}">
                    <div class="papers-inner-list">
                        <div class="paper-row">
                            <span class="paper-title">${subjectName} Paper 1</span>
                            <a href="${year.paper1Url}" class="view-paper-btn">
                                View Paper
                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                        <div class="paper-row">
                            <span class="paper-title">${subjectName} Paper 2</span>
                            <a href="${year.paper2Url}" class="view-paper-btn">
                                View Paper
                                <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            this.accordionStack.appendChild(accordionItem);
        });
    }

    /**
     * Handles accordion click actions cleanly with smooth auto-scrolling calculations
     */
    toggleAccordion(id) {
        const activeItem = document.getElementById(id);
        const panel = activeItem.querySelector('.accordion-content-panel');
        const isAlreadyExpanded = activeItem.classList.contains('is-expanded');
        
        // Auto-collapse any other open accordion items safely
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== activeItem) {
                item.classList.remove('is-expanded');
                item.querySelector('.accordion-content-panel').style.maxHeight = null;
                item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            }
        });

        if (isAlreadyExpanded) {
            activeItem.classList.remove('is-expanded');
            panel.style.maxHeight = null;
            activeItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        } else {
            activeItem.classList.add('is-expanded');
            panel.style.maxHeight = panel.scrollHeight + "px";
            activeItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'true');
        }
    }
}

// Instantiate Global Class Router Module globally
const router = new PortalRouter();
