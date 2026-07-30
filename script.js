// Mapping of parent nodes to their entire list of downstream child IDs & connectors
const lineageMap = {
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
    'enosh-node': [
        'enosh-connector'
    ],
    'gen2-children': [
        'gen2-connector', 'cain-enoch-node', 'cain-enoch-connector',
        'irad-node', 'irad-connector', 'mehujael-node', 'mehujael-connector',
        'methushael-node', 'methushael-connector', 'lamech-node', 
        'lamech-connector', 'lamech-children', 'lamech-children-connector',
        'enosh-node', 'enosh-connector'
    ]
};

// Direct mapping of target nodes to their immediate connector lines
const connectorMap = {
    'gen2-children': 'gen2-connector',
    'enosh-node': 'enosh-connector',
    'cain-enoch-node': 'cain-enoch-connector',
    'irad-node': 'irad-connector',
    'mehujael-node': 'mehujael-connector',
    'methushael-node': 'methushael-connector',
    'lamech-node': 'lamech-connector',
    'lamech-children': 'lamech-children-connector'
};

function revealNext(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const isHidden = targetElement.classList.contains('hidden');

    if (isHidden) {
        // --- EXPAND BRANCH ---

        // Auto-collapse Cain's tree if opening Seth's branch (Enosh)
        if (targetId === 'enosh-node') {
            collapseDescendants('cain-enoch-node');
            hideElement('cain-enoch-node');
        }

        // Show target element and its immediate connector
        targetElement.classList.remove('hidden');
        if (connectorMap[targetId]) {
            showElement(connectorMap[targetId]);
        }
    } else {
        // --- COLLAPSE BRANCH & ALL DESCENDANTS ---
        hideElement(targetId);
        if (connectorMap[targetId]) {
            hideElement(connectorMap[targetId]);
        }
        collapseDescendants(targetId);
    }
}

// Helper to hide a single element safely
function hideElement(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
}

// Helper to show a single element safely
function showElement(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
}

// Helper to collapse every child element listed in the lineage map
function collapseDescendants(parentId) {
    if (lineageMap[parentId]) {
        lineageMap[parentId].forEach(childId => hideElement(childId));
    }
}