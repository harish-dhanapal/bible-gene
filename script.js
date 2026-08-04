// Mapping of parent nodes to their entire list of downstream child IDs & connectors
const lineageMap = {
    // Cain's Branch
    'cain-enoch-node': [
        'cain-enoch-connector', 'irad-node', 'irad-connector', 
        'mehujael-node', 'mehujael-connector', 'methushael-node', 
        'methushael-connector', 'lamech-node', 'lamech-connector', 
        'lamech-children', 'lamech-children-connector'
    ],
    'irad-node': [
        'irad-connector', 'mehujael-node', 'mehujael-connector', 
        'methushael-node', 'methushael-connector', 'lamech-node', 
        'lamech-connector', 'lamech-children', 'lamech-children-connector'
    ],
    'mehujael-node': [
        'mehujael-connector', 'methushael-node', 'methushael-connector', 
        'lamech-node', 'lamech-connector', 'lamech-children', 
        'lamech-children-connector'
    ],
    'methushael-node': [
        'methushael-connector', 'lamech-node', 'lamech-connector', 
        'lamech-children', 'lamech-children-connector'
    ],
    'lamech-node': [
        'lamech-connector', 'lamech-children', 'lamech-children-connector'
    ],

    // Seth's Lineage down to Noah
    'enosh-node': [
        'enosh-connector', 'kenan-node', 'kenan-connector',
        'mahalalel-node', 'mahalalel-connector', 'jared-node',
        'jared-connector', 'seth-enoch-node', 'seth-enoch-connector',
        'methuselah-node', 'methuselah-connector', 'seth-lamech-node',
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'kenan-node': [
        'kenan-connector', 'mahalalel-node', 'mahalalel-connector',
        'jared-node', 'jared-connector', 'seth-enoch-node', 'seth-enoch-connector',
        'methuselah-node', 'methuselah-connector', 'seth-lamech-node',
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'mahalalel-node': [
        'mahalalel-connector', 'jared-node', 'jared-connector',
        'seth-enoch-node', 'seth-enoch-connector', 'methuselah-node',
        'methuselah-connector', 'seth-lamech-node', 'seth-lamech-connector',
        'noah-node', 'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'jared-node': [
        'jared-connector', 'seth-enoch-node', 'seth-enoch-connector',
        'methuselah-node', 'methuselah-connector', 'seth-lamech-node',
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'seth-enoch-node': [
        'seth-enoch-connector', 'methuselah-node', 'methuselah-connector',
        'seth-lamech-node', 'seth-lamech-connector', 'noah-node',
        'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'methuselah-node': [
        'methuselah-connector', 'seth-lamech-node', 'seth-lamech-connector',
        'noah-node', 'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'seth-lamech-node': [
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'noah-node': [
        'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'noah-children': [
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ],
    'shem-node': [
        'shem-connector', 'shem-children'
    ],
    'ham-node': [
        'ham-connector', 'ham-children',
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children',
        'canaan-connector', 'canaan-children'
    ],
    'ham-children': [
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children',
        'canaan-connector', 'canaan-children'
    ],
    'cush-node': [
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children'
    ],
    'cush-children': [
        'raamah-connector', 'raamah-children'
    ],
    'raamah-node': [
        'raamah-connector', 'raamah-children'
    ],
    'mizraim-node': [
        'mizraim-connector', 'mizraim-children'
    ],
    'canaan-node': [
        'canaan-connector', 'canaan-children'
    ],
    'japheth-node': [
        'japheth-connector', 'japheth-children'
    ],

    // Root Generation 2
    'gen2-children': [
        'gen2-connector', 'cain-enoch-node', 'cain-enoch-connector',
        'irad-node', 'irad-connector', 'mehujael-node', 'mehujael-connector',
        'methushael-node', 'methushael-connector', 'lamech-node', 
        'lamech-connector', 'lamech-children', 'lamech-children-connector',
        'enosh-node', 'enosh-connector', 'kenan-node', 'kenan-connector',
        'mahalalel-node', 'mahalalel-connector', 'jared-node', 'jared-connector',
        'seth-enoch-node', 'seth-enoch-connector', 'methuselah-node',
        'methuselah-connector', 'seth-lamech-node', 'seth-lamech-connector',
        'noah-node', 'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-connector', 'shem-children', 'ham-connector', 'ham-children', 
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children'
    ]
};

// Direct mapping of target nodes to their immediate connector lines
const connectorMap = {
    'gen2-children': 'gen2-connector',
    'cain-enoch-node': 'cain-enoch-connector',
    'irad-node': 'irad-connector',
    'mehujael-node': 'mehujael-connector',
    'methushael-node': 'methushael-connector',
    'lamech-node': 'lamech-connector',
    'lamech-children': 'lamech-children-connector',

    // Seth's Connectors
    'enosh-node': 'enosh-connector',
    'kenan-node': 'kenan-connector',
    'mahalalel-node': 'mahalalel-connector',
    'jared-node': 'jared-connector',
    'seth-enoch-node': 'seth-enoch-connector',
    'methuselah-node': 'methuselah-connector',
    'seth-lamech-node': 'seth-lamech-connector',
    'noah-node': 'noah-connector',
    'noah-children': 'noah-children-connector',
    'shem-node': 'shem-connector',
    'shem-children': 'shem-connector',
    'ham-node': 'ham-connector',
    'ham-children': 'ham-connector',
    'cush-node': 'cush-connector',
    'cush-children': 'cush-connector',
    'raamah-node': 'raamah-connector',
    'raamah-children': 'raamah-connector',
    'mizraim-node': 'mizraim-connector',
    'mizraim-children': 'mizraim-connector',
    'canaan-node': 'canaan-connector',
    'canaan-children': 'canaan-connector',
    'japheth-node': 'japheth-connector',
    'japheth-children': 'japheth-connector'
};

// Parent map for auto-scroll on collapse
const parentMap = {
    'gen2-children': 'root',
    'cain-enoch-node': 'gen2-children',
    'enosh-node': 'gen2-children',
    'irad-node': 'cain-enoch-node',
    'mehujael-node': 'irad-node',
    'methushael-node': 'mehujael-node',
    'lamech-node': 'methushael-node',
    'lamech-children': 'lamech-node',

    // Seth line parents
    'kenan-node': 'enosh-node',
    'mahalalel-node': 'kenan-node',
    'jared-node': 'mahalalel-node',
    'seth-enoch-node': 'jared-node',
    'methuselah-node': 'seth-enoch-node',
    'seth-lamech-node': 'methuselah-node',
    'noah-node': 'seth-lamech-node',
    'noah-children': 'noah-node',
    'shem-node': 'noah-children',
    'shem-children': 'shem-node',
    'ham-node': 'noah-children',
    'ham-children': 'ham-node',
    'cush-node': 'ham-children',
    'cush-children': 'cush-node',
    'raamah-node': 'cush-children',
    'raamah-children': 'raamah-node',
    'mizraim-node': 'ham-children',
    'mizraim-children': 'mizraim-node',
    'canaan-node': 'ham-children',
    'canaan-children': 'canaan-node',
    'japheth-node': 'noah-children',
    'japheth-children': 'japheth-node'
};

// Helper to get the parent node element for a given target branch ID
function getParentElementForTarget(targetId) {
    if (targetId === 'cain-enoch-node') return document.querySelector('.node.cain');
    if (targetId === 'enosh-node') return document.querySelector('.node.seth');
    const parentId = parentMap[targetId];
    if (parentId) return document.getElementById(parentId);
    return null;
}

// Function to toggle Abel's theme AND collapse open branches
function toggleAbelTheme() {
    const abelNode = document.getElementById('abel-node');

    // Smooth camera glide to Abel first
    if (abelNode) {
        scrollToNode('abel-node');
    }

    // 1. Collapse Cain's branch if expanded
    if (typeof collapseDescendants === 'function') {
        collapseDescendants('cain-enoch-node');
        hideElement('cain-enoch-node');
        hideElement('cain-enoch-connector');
        const cainNode = document.querySelector('.node.cain');
        if (cainNode) cainNode.classList.remove('is-cracked');
    }

    // 2. Collapse Seth's branch if expanded
    if (typeof collapseDescendants === 'function') {
        collapseDescendants('enosh-node');
        hideElement('enosh-node');
        hideElement('enosh-connector');
        const sethNode = document.querySelector('.node.seth');
        if (sethNode) sethNode.classList.remove('is-cracked');
    }

    // 3. Clear Cain and Seth themes if active
    document.body.classList.remove('cain-theme', 'seth-theme');
    
    // 4. Toggle Abel theme on/off
    document.body.classList.toggle('abel-theme');
}

// Abel theme toggling is called directly via onclick="toggleAbelTheme()" in index.html

// Ensure click on info-badge button does not trigger node animations
document.addEventListener('click', (event) => {
    if (event.target.closest('.info-badge')) return;
});

function revealNext(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const parentNode = getParentElementForTarget(targetId);
    const isHidden = targetElement.classList.contains('hidden');

    if (isHidden) {
        // --- EXPAND BRANCH ---

        // Reset all custom themes back to main Garden when opening root/gen2
        if (targetId === 'gen2-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme');
            const abelNode = document.getElementById('abel-node');
            if (abelNode) abelNode.classList.remove('is-cracked');
        }

        // Auto-collapse Cain's tree & switch to Seth theme if opening Seth's branch
        if (targetId === 'enosh-node') {
            collapseDescendants('cain-enoch-node');
            hideElement('cain-enoch-node');
            hideElement('cain-enoch-connector');
            const cainNode = document.querySelector('.node.cain');
            if (cainNode) cainNode.classList.remove('is-cracked');
            const abelNode = document.getElementById('abel-node');
            if (abelNode) abelNode.classList.remove('is-cracked');

            document.body.classList.remove('cain-theme', 'abel-theme');
            document.body.classList.add('seth-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.remove('cain-open');
        }

        // Auto-collapse Seth's tree & switch to Cain theme if opening Cain's branch
        if (targetId === 'cain-enoch-node') {
            collapseDescendants('enosh-node');
            hideElement('enosh-node');
            hideElement('enosh-connector');
            const sethNode = document.querySelector('.node.seth');
            if (sethNode) sethNode.classList.remove('is-cracked');
            const abelNode = document.getElementById('abel-node');
            if (abelNode) abelNode.classList.remove('is-cracked');

            document.body.classList.remove('seth-theme', 'abel-theme');
            document.body.classList.add('cain-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.add('cain-open');
        }

        if (targetId === 'lamech-children') {
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.add('cain-open');
        }

        // Auto-collapse Ham & Japheth if opening Shem's branch
        if (targetId === 'shem-children') {
            collapseDescendants('ham-children');
            hideElement('ham-children');
            hideElement('ham-connector');
            const hamNode = document.getElementById('ham-node');
            if (hamNode) hamNode.classList.remove('is-cracked');

            collapseDescendants('japheth-children');
            hideElement('japheth-children');
            hideElement('japheth-connector');
            const japhethNode = document.getElementById('japheth-node');
            if (japhethNode) japhethNode.classList.remove('is-cracked');
        }

        // Auto-collapse Shem & Japheth if opening Ham's branch
        if (targetId === 'ham-children') {
            collapseDescendants('shem-children');
            hideElement('shem-children');
            hideElement('shem-connector');
            const shemNode = document.getElementById('shem-node');
            if (shemNode) shemNode.classList.remove('is-cracked');

            collapseDescendants('japheth-children');
            hideElement('japheth-children');
            hideElement('japheth-connector');
            const japhethNode = document.getElementById('japheth-node');
            if (japhethNode) japhethNode.classList.remove('is-cracked');
        }

        // Auto-collapse Shem & Ham if opening Japheth's branch
        if (targetId === 'japheth-children') {
            collapseDescendants('shem-children');
            hideElement('shem-children');
            hideElement('shem-connector');
            const shemNode = document.getElementById('shem-node');
            if (shemNode) shemNode.classList.remove('is-cracked');

            collapseDescendants('ham-children');
            hideElement('ham-children');
            hideElement('ham-connector');
            const hamNode = document.getElementById('ham-node');
            if (hamNode) hamNode.classList.remove('is-cracked');
        }

        // Auto-collapse Mizraim & Canaan if opening Cush's branch
        if (targetId === 'cush-children') {
            collapseDescendants('mizraim-children');
            hideElement('mizraim-children');
            hideElement('mizraim-connector');
            const mNode = document.getElementById('mizraim-node');
            if (mNode) mNode.classList.remove('is-cracked');

            collapseDescendants('canaan-children');
            hideElement('canaan-children');
            hideElement('canaan-connector');
            const cNode = document.getElementById('canaan-node');
            if (cNode) cNode.classList.remove('is-cracked');
        }

        // Auto-collapse Cush & Canaan if opening Mizraim's branch
        if (targetId === 'mizraim-children') {
            collapseDescendants('cush-children');
            hideElement('cush-children');
            hideElement('cush-connector');
            const cuNode = document.getElementById('cush-node');
            if (cuNode) cuNode.classList.remove('is-cracked');

            collapseDescendants('canaan-children');
            hideElement('canaan-children');
            hideElement('canaan-connector');
            const cNode = document.getElementById('canaan-node');
            if (cNode) cNode.classList.remove('is-cracked');
        }

        // Auto-collapse Cush & Mizraim if opening Canaan's branch
        if (targetId === 'canaan-children') {
            collapseDescendants('cush-children');
            hideElement('cush-children');
            hideElement('cush-connector');
            const cuNode = document.getElementById('cush-node');
            if (cuNode) cuNode.classList.remove('is-cracked');

            collapseDescendants('mizraim-children');
            hideElement('mizraim-children');
            hideElement('mizraim-connector');
            const mNode = document.getElementById('mizraim-node');
            if (mNode) mNode.classList.remove('is-cracked');
        }

        // Show target element and its immediate connector
        targetElement.classList.remove('hidden');
        if (connectorMap[targetId]) {
            showElement(connectorMap[targetId]);
        }

        // Mark the active parent node as cracked while its branch is open
        if (parentNode) {
            parentNode.classList.add('is-cracked');
        }

        // Smooth center scroll to newly expanded node
        scrollToNode(targetId);

    } else {
        // --- COLLAPSE BRANCH & ALL DESCENDANTS ---
        hideElement(targetId);
        if (connectorMap[targetId]) {
            hideElement(connectorMap[targetId]);
        }
        collapseDescendants(targetId);

        // Mark the parent node as whole (un-cracked) since its branch is now closed
        if (parentNode) {
            parentNode.classList.remove('is-cracked');
        }

        // Reset background to main garden if collapsing Cain, Seth, or Gen 2
        if (targetId === 'cain-enoch-node' || targetId === 'lamech-children') {
            document.body.classList.remove('cain-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.remove('cain-open');
        }
        if (targetId === 'enosh-node') {
            document.body.classList.remove('seth-theme');
        }
        if (targetId === 'gen2-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.remove('cain-open');
        }

        // Scroll back up to the parent node
        if (parentMap[targetId]) {
            scrollToNode(parentMap[targetId]);
        }
    }
}

// Master helper to close all open information detail panels
function closeAllPanels() {
    const panels = document.querySelectorAll('.detail-panel');
    panels.forEach(p => p.classList.add('hidden'));
}

function showPanel(panelId, event) {
    closeAllPanels();
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const badge = event ? (event.currentTarget || event.target) : null;
    const parentNode = badge ? badge.closest('.node') : null;

    if (parentNode) {
        parentNode.appendChild(panel);
        parentNode.style.zIndex = '600';
    }

    panel.classList.remove('hidden');
}

function toggleAdamInfo(event) {
    const panel = document.getElementById('detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function closeAdamInfo() {
    const panel = document.getElementById('detail-panel');
    if (panel) panel.classList.add('hidden');
}

function toggleCainInfo(event) {
    const panel = document.getElementById('cain-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('cain-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function closeCainInfo() {
    const panel = document.getElementById('cain-detail-panel');
    if (panel) panel.classList.add('hidden');
}

function toggleAbelInfo(event) {
    const panel = document.getElementById('abel-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('abel-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function closeAbelInfo() {
    const panel = document.getElementById('abel-detail-panel');
    if (panel) panel.classList.add('hidden');
}

function toggleSethInfo(event) {
    const panel = document.getElementById('seth-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('seth-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleShemInfo(event) {
    const panel = document.getElementById('shem-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('shem-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleArphaxadInfo(event) {
    const panel = document.getElementById('arphaxad-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('arphaxad-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

// Close panels when the user clicks anywhere outside them
window.addEventListener('click', (event) => {
    if (event.target.closest('.info-badge') || event.target.closest('.detail-panel')) return;
    closeAllPanels();
});

// Smooth scroll centering helper
function scrollToNode(nodeId) {
    requestAnimationFrame(() => {
        setTimeout(() => {
            const element = document.getElementById(nodeId);
            if (!element) return;

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }, 120);
    });
}

// Helper with smooth 180ms fold-up animation for collapsing target branch
function hideElement(id, immediate = false) {
    const el = document.getElementById(id);
    if (!el) return;

    if (!immediate && !el.classList.contains('hidden')) {
        el.classList.add('collapsing');
        setTimeout(() => {
            el.classList.remove('collapsing');
            el.classList.add('hidden');
            el.classList.remove('is-cracked');
            if (el.classList.contains('node')) {
                el.classList.remove('is-cracked');
            }
            el.querySelectorAll('.node').forEach(n => {
                n.classList.remove('is-cracked');
            });
        }, 180);
    } else {
        el.classList.remove('collapsing');
        el.classList.add('hidden');
        el.classList.remove('is-cracked');
        if (el.classList.contains('node')) {
            el.classList.remove('is-cracked');
        }
        el.querySelectorAll('.node').forEach(n => {
            n.classList.remove('is-cracked');
        });
    }
}

function showElement(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('collapsing');
        el.classList.remove('hidden');
    }
}

function collapseDescendants(parentId) {
    if (lineageMap[parentId]) {
        lineageMap[parentId].forEach(childId => hideElement(childId, true));
    }
}