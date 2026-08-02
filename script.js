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
        'noah-children', 'noah-children-connector'
    ],
    'kenan-node': [
        'kenan-connector', 'mahalalel-node', 'mahalalel-connector',
        'jared-node', 'jared-connector', 'seth-enoch-node', 'seth-enoch-connector',
        'methuselah-node', 'methuselah-connector', 'seth-lamech-node',
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector'
    ],
    'mahalalel-node': [
        'mahalalel-connector', 'jared-node', 'jared-connector',
        'seth-enoch-node', 'seth-enoch-connector', 'methuselah-node',
        'methuselah-connector', 'seth-lamech-node', 'seth-lamech-connector',
        'noah-node', 'noah-connector', 'noah-children', 'noah-children-connector'
    ],
    'jared-node': [
        'jared-connector', 'seth-enoch-node', 'seth-enoch-connector',
        'methuselah-node', 'methuselah-connector', 'seth-lamech-node',
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector'
    ],
    'seth-enoch-node': [
        'seth-enoch-connector', 'methuselah-node', 'methuselah-connector',
        'seth-lamech-node', 'seth-lamech-connector', 'noah-node',
        'noah-connector', 'noah-children', 'noah-children-connector'
    ],
    'methuselah-node': [
        'methuselah-connector', 'seth-lamech-node', 'seth-lamech-connector',
        'noah-node', 'noah-connector', 'noah-children', 'noah-children-connector'
    ],
    'seth-lamech-node': [
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector'
    ],
    'noah-node': [
        'noah-connector', 'noah-children', 'noah-children-connector'
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
        'noah-node', 'noah-connector', 'noah-children', 'noah-children-connector'
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
    'noah-children': 'noah-children-connector'
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
    'noah-children': 'noah-node'
};

// Function to toggle Abel's specific background theme
function toggleAbelTheme() {
    // Clear Cain and Seth themes if active
    document.body.classList.remove('cain-theme', 'seth-theme');
    
    // Toggle Abel theme on/off
    document.body.classList.toggle('abel-theme');
}

// Ensure click on Abel node toggles his theme
document.addEventListener('DOMContentLoaded', () => {
    const abelNode = document.getElementById('abel-node'); // Make sure Abel's node has id="abel-node" in index.html
    if (abelNode) {
        abelNode.addEventListener('click', toggleAbelTheme);
    }
});

function revealNext(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const isHidden = targetElement.classList.contains('hidden');

    if (isHidden) {
        // --- EXPAND BRANCH ---

        // Reset all custom themes back to main Garden when opening root/gen2
        if (targetId === 'gen2-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme');
        }

        // Auto-collapse Cain's tree & switch to Seth theme if opening Seth's branch
        if (targetId === 'enosh-node') {
            collapseDescendants('cain-enoch-node');
            hideElement('cain-enoch-node');
            hideElement('cain-enoch-connector');
            document.body.classList.remove('cain-theme', 'abel-theme');
            document.body.classList.add('seth-theme');
        }

        // Auto-collapse Seth's tree & switch to Cain theme if opening Cain's branch
        if (targetId === 'cain-enoch-node') {
            collapseDescendants('enosh-node');
            hideElement('enosh-node');
            hideElement('enosh-connector');
            document.body.classList.remove('seth-theme', 'abel-theme');
            document.body.classList.add('cain-theme');
        }

        // Show target element and its immediate connector
        targetElement.classList.remove('hidden');
        if (connectorMap[targetId]) {
            showElement(connectorMap[targetId]);
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

        // Reset background to main garden if collapsing Cain, Seth, or Gen 2
        if (targetId === 'cain-enoch-node') {
            document.body.classList.remove('cain-theme');
        }
        if (targetId === 'enosh-node') {
            document.body.classList.remove('seth-theme');
        }
        if (targetId === 'gen2-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme');
        }

        // Scroll back up to the parent node
        if (parentMap[targetId]) {
            scrollToNode(parentMap[targetId]);
        }
    }
}

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

// Helpers
function hideElement(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
}

function showElement(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
}

function collapseDescendants(parentId) {
    if (lineageMap[parentId]) {
        lineageMap[parentId].forEach(childId => hideElement(childId));
    }
}