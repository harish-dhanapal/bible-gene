// ============================================================
// PART 1 — STATIC MAPS & SPECIAL BEHAVIORS CONFIG
// ============================================================

// Lookup config for special one-off non-structural behaviors
const SPECIAL_BEHAVIORS = {
    'abel': {
        nodeId: 'abel-node',
        extraClasses: 'abel',
        onclick: () => toggleAbelTheme()
    },
    'cain': { extraClasses: 'cain' },
    'seth': { extraClasses: 'seth' },
    'seth-enoch': { extraClasses: 'seth' },
    'noah': { extraClasses: 'seth' }
};

// Nodes that have an empty branch container in legacy HTML/JS structure despite having 0 children in JSON
const EMPTY_BRANCH_NODES = new Set(['eleazar', 'rehabiah', 'solomon', 'nathan']);

// Mapping of parent nodes to their entire list of downstream child IDs & connectors
const lineageMap = {
    // Cain's Branch
    'cain-enoch-node': [
        'cain-enoch-connector', 'irad-node', 'irad-connector', 
        'mehujael-node', 'mehujael-connector', 'methushael-node', 
        'methushael-connector', 'lamech-node', 'lamech-connector', 
        'lamech-children', 'lamech-children-connector'
    ],
    'cain-children': [
        'cain-connector', 'cain-enoch-node', 'cain-enoch-connector', 'irad-node', 'irad-connector', 
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
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'seth-children': [
        'seth-connector', 'enosh-node', 'enosh-connector', 'kenan-node', 'kenan-connector',
        'mahalalel-node', 'mahalalel-connector', 'jared-node',
        'jared-connector', 'seth-enoch-node', 'seth-enoch-connector',
        'methuselah-node', 'methuselah-connector', 'seth-lamech-node',
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector',
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'kenan-node': [
        'kenan-connector', 'mahalalel-node', 'mahalalel-connector',
        'jared-node', 'jared-connector', 'seth-enoch-node', 'seth-enoch-connector',
        'methuselah-node', 'methuselah-connector', 'seth-lamech-node',
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector',
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'mahalalel-node': [
        'mahalalel-connector', 'jared-node', 'jared-connector',
        'seth-enoch-node', 'seth-enoch-connector', 'methuselah-node',
        'methuselah-connector', 'seth-lamech-node', 'seth-lamech-connector',
        'noah-node', 'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'jared-node': [
        'jared-connector', 'seth-enoch-node', 'seth-enoch-connector',
        'methuselah-node', 'methuselah-connector', 'seth-lamech-node',
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector',
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'seth-enoch-node': [
        'seth-enoch-connector', 'methuselah-node', 'methuselah-connector',
        'seth-lamech-node', 'seth-lamech-connector', 'noah-node',
        'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'methuselah-node': [
        'methuselah-connector', 'seth-lamech-node', 'seth-lamech-connector',
        'noah-node', 'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'seth-lamech-node': [
        'seth-lamech-connector', 'noah-node', 'noah-connector',
        'noah-children', 'noah-children-connector',
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'noah-node': [
        'noah-connector', 'noah-children', 'noah-children-connector',
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'noah-children': [
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'ham-node', 'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-connector', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'shem-node': [
        'shem-connector', 'shem-children',
        'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'aram-connector', 'aram-children',
        'shelah-connector', 'shelah-node', 'eber-connector', 'eber-node',
        'eber-children-connector', 'eber-children', 'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'shem-children': [
        'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node',
        'aram-connector', 'aram-children',
        'shelah-connector', 'shelah-node', 'eber-connector', 'eber-node',
        'eber-children-connector', 'eber-children', 'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'aram-node': [
        'aram-connector', 'aram-children'
    ],
    'arphaxad-node': [
        'shelah-connector', 'shelah-node', 'eber-connector', 'eber-node',
        'eber-children-connector', 'eber-children', 'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'shelah-node': [
        'eber-connector', 'eber-node', 'eber-children-connector', 'eber-children',
        'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'eber-node': [
        'eber-children-connector', 'eber-children', 'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'eber-children': [
        'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'joktan-node': [
        'joktan-connector', 'joktan-children'
    ],
    'peleg-node': [
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'reu-node': [
        'serug-connector', 'serug-node', 'nahor-ancestor-connector', 'nahor-ancestor-node',
        'terah-connector', 'terah-node', 'terah-children-connector', 'terah-children',
        'nahor-connector', 'nahor-children', 'haran-connector', 'haran-children',
        'abraham-connector', 'abraham-children'
    ],
    'serug-node': [
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'nahor-ancestor-node': [
        'terah-connector', 'terah-node', 'terah-children-connector', 'terah-children',
        'nahor-connector', 'nahor-children', 'haran-connector', 'haran-children',
        'abraham-connector', 'abraham-children'
    ],
    'terah-node': [
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children',
        'isaac-connector', 'isaac-children', 'ishmael-connector', 'ishmael-children',
        'jokshan-connector', 'jokshan-children', 'dedan-connector', 'dedan-children',
        'midian-connector', 'midian-children', 'bethuel-connector', 'bethuel-children',
        'laban-connector', 'laban-children', 'rebekah-connector', 'rebekah-children',
        'lot-connector', 'lot-children'
    ],
    'terah-children': [
        'nahor-connector', 'nahor-children', 'haran-connector', 'haran-children',
        'abraham-connector', 'abraham-children',
        'isaac-connector', 'isaac-children', 'ishmael-connector', 'ishmael-children',
        'jokshan-connector', 'jokshan-children', 'dedan-connector', 'dedan-children',
        'midian-connector', 'midian-children', 'bethuel-connector', 'bethuel-children',
        'laban-connector', 'laban-children', 'rebekah-connector', 'rebekah-children',
        'lot-connector', 'lot-children'
    ],
    'abraham-node': [
        'abraham-connector', 'abraham-children', 'isaac-connector', 'isaac-children',
        'ishmael-connector', 'ishmael-children', 'jokshan-connector', 'jokshan-children',
        'dedan-connector', 'dedan-children', 'midian-connector', 'midian-children',
        'reuben-connector', 'reuben-children', 'simeon-connector', 'simeon-children',
        'levi-connector', 'levi-children', 'gershon-connector', 'gershon-children',
        'kohath-connector', 'kohath-children', 'merari-connector', 'merari-children',
        'joseph-connector', 'joseph-children', 'esau-connector', 'esau-children'
    ],
    'abraham-children': [
        'isaac-connector', 'isaac-children',
        'ishmael-connector', 'ishmael-children',
        'jokshan-connector', 'jokshan-children',
        'dedan-connector', 'dedan-children',
        'midian-connector', 'midian-children',
        'reuben-connector', 'reuben-children', 'simeon-connector', 'simeon-children',
        'levi-connector', 'levi-children', 'gershon-connector', 'gershon-children',
        'kohath-connector', 'kohath-children', 'merari-connector', 'merari-children',
        'joseph-connector', 'joseph-children', 'esau-connector', 'esau-children'
    ],
    'isaac-node': [
        'isaac-connector', 'isaac-children', 'esau-connector', 'esau-children', 'jacob-connector', 'jacob-children', 'joseph-connector', 'joseph-children', 'reuben-connector', 'reuben-children', 'simeon-connector', 'simeon-children', 'levi-connector', 'levi-children', 'gershon-connector', 'gershon-children', 'kohath-connector', 'kohath-children', 'merari-connector', 'merari-children'
    ],
    'isaac-children': [
        'esau-connector', 'esau-children', 'jacob-connector', 'jacob-children', 'joseph-connector', 'joseph-children', 'reuben-connector', 'reuben-children', 'simeon-connector', 'simeon-children', 'levi-connector', 'levi-children', 'gershon-connector', 'gershon-children', 'kohath-connector', 'kohath-children', 'merari-connector', 'merari-children'
    ],
    'jacob-node': [
        'jacob-connector', 'jacob-children', 'joseph-connector', 'joseph-children', 'reuben-connector', 'reuben-children', 'simeon-connector', 'simeon-children', 'levi-connector', 'levi-children', 'gershon-connector', 'gershon-children', 'kohath-connector', 'kohath-children', 'merari-connector', 'merari-children', 'dan-connector', 'dan-children', 'naphtali-connector', 'naphtali-children', 'gad-connector', 'gad-children', 'asher-connector', 'asher-children', 'beriah-connector', 'beriah-children', 'issachar-connector', 'issachar-children', 'zebulun-connector', 'zebulun-children', 'benjamin-connector', 'benjamin-children', 'judah-connector', 'judah-children', 'perez-connector', 'perez-children', 'hezron-perez-connector', 'hezron-perez-children', 'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'jacob-children': [
        'jacob-connector', 'jacob-children', 'joseph-connector', 'joseph-children', 'reuben-connector', 'reuben-children', 'simeon-connector', 'simeon-children', 'levi-connector', 'levi-children', 'gershon-connector', 'gershon-children', 'kohath-connector', 'kohath-children', 'merari-connector', 'merari-children', 'dan-connector', 'dan-children', 'naphtali-connector', 'naphtali-children', 'gad-connector', 'gad-children', 'asher-connector', 'asher-children', 'beriah-connector', 'beriah-children', 'issachar-connector', 'issachar-children', 'zebulun-connector', 'zebulun-children', 'benjamin-connector', 'benjamin-children', 'judah-connector', 'judah-children', 'perez-connector', 'perez-children', 'hezron-perez-connector', 'hezron-perez-children', 'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'dan-node': [
        'dan-connector', 'dan-children'
    ],
    'dan-children': [
        'dan-connector', 'dan-children'
    ],
    'naphtali-node': [
        'naphtali-connector', 'naphtali-children'
    ],
    'naphtali-children': [
        'naphtali-connector', 'naphtali-children'
    ],
    'gad-node': [
        'gad-connector', 'gad-children'
    ],
    'gad-children': [
        'gad-connector', 'gad-children'
    ],
    'asher-node': [
        'asher-connector', 'asher-children', 'beriah-connector', 'beriah-children'
    ],
    'asher-children': [
        'asher-connector', 'asher-children', 'beriah-connector', 'beriah-children'
    ],
    'beriah-node': [
        'beriah-connector', 'beriah-children'
    ],
    'beriah-children': [
        'beriah-connector', 'beriah-children'
    ],
    'issachar-node': [
        'issachar-connector', 'issachar-children'
    ],
    'issachar-children': [
        'issachar-connector', 'issachar-children'
    ],
    'zebulun-node': [
        'zebulun-connector', 'zebulun-children'
    ],
    'zebulun-children': [
        'zebulun-connector', 'zebulun-children'
    ],
    'benjamin-node': [
        'benjamin-connector', 'benjamin-children'
    ],
    'benjamin-children': [
        'benjamin-connector', 'benjamin-children'
    ],
    'judah-node': [
        'judah-connector', 'judah-children', 'perez-connector', 'perez-children', 'hezron-perez-connector', 'hezron-perez-children', 'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'judah-children': [
        'judah-connector', 'judah-children', 'perez-connector', 'perez-children', 'hezron-perez-connector', 'hezron-perez-children', 'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'perez-node': [
        'perez-connector', 'perez-children', 'hezron-perez-connector', 'hezron-perez-children', 'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'perez-children': [
        'perez-connector', 'perez-children', 'hezron-perez-connector', 'hezron-perez-children', 'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'hezron-perez-node': [
        'hezron-perez-connector', 'hezron-perez-children', 'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'hezron-perez-children': [
        'hezron-perez-connector', 'hezron-perez-children', 'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'ram-node': [
        'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'ram-children': [
        'ram-connector', 'ram-children', 'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'amminadab-node': [
        'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'amminadab-children': [
        'amminadab-connector', 'amminadab-children', 'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'nahshon-node': [
        'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'nahshon-children': [
        'nahshon-connector', 'nahshon-children', 'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'salmon-node': [
        'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'salmon-children': [
        'salmon-connector', 'salmon-children', 'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'boaz-node': [
        'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'boaz-children': [
        'boaz-connector', 'boaz-children', 'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'obed-node': [
        'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'obed-children': [
        'obed-connector', 'obed-children', 'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'jesse-node': [
        'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'jesse-children': [
        'jesse-connector', 'jesse-children', 'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'david-node': [
        'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'david-children': [
        'david-connector', 'david-children', 'solomon-connector', 'solomon-children', 'nathan-connector', 'nathan-children'
    ],
    'solomon-node': [
        'solomon-connector', 'solomon-children'
    ],
    'solomon-children': [
        'solomon-connector', 'solomon-children'
    ],
    'nathan-node': [
        'nathan-connector', 'nathan-children'
    ],
    'nathan-children': [
        'nathan-connector', 'nathan-children'
    ],
    'levi-node': [
        'levi-connector', 'levi-children', 'gershon-connector', 'gershon-children', 'kohath-connector', 'kohath-children', 'merari-connector', 'merari-children', 'mahli-connector', 'mahli-children', 'mushi-connector', 'mushi-children'
    ],
    'levi-children': [
        'levi-connector', 'levi-children', 'gershon-connector', 'gershon-children', 'kohath-connector', 'kohath-children', 'merari-connector', 'merari-children', 'mahli-connector', 'mahli-children', 'mushi-connector', 'mushi-children'
    ],
    'merari-node': [
        'merari-connector', 'merari-children', 'mahli-connector', 'mahli-children', 'mushi-connector', 'mushi-children'
    ],
    'merari-children': [
        'merari-connector', 'merari-children', 'mahli-connector', 'mahli-children', 'mushi-connector', 'mushi-children'
    ],
    'mahli-node': [
        'mahli-connector', 'mahli-children'
    ],
    'mahli-children': [
        'mahli-connector', 'mahli-children'
    ],
    'mushi-node': [
        'mushi-connector', 'mushi-children'
    ],
    'mushi-children': [
        'mushi-connector', 'mushi-children'
    ],
    'kohath-node': [
        'kohath-connector', 'kohath-children', 'amram-connector', 'amram-children', 'aaron-connector', 'aaron-children', 'eleazar-connector', 'eleazar-children', 'moses-connector', 'moses-children', 'gershom-moses-connector', 'gershom-moses-children', 'eliezer-connector', 'eliezer-children', 'rehabiah-connector', 'rehabiah-children', 'izhar-connector', 'izhar-children', 'korah-connector', 'korah-children', 'hebron-connector', 'hebron-children', 'uzziel-connector', 'uzziel-children'
    ],
    'kohath-children': [
        'kohath-connector', 'kohath-children', 'amram-connector', 'amram-children', 'aaron-connector', 'aaron-children', 'eleazar-connector', 'eleazar-children', 'moses-connector', 'moses-children', 'gershom-moses-connector', 'gershom-moses-children', 'eliezer-connector', 'eliezer-children', 'rehabiah-connector', 'rehabiah-children', 'izhar-connector', 'izhar-children', 'korah-connector', 'korah-children', 'hebron-connector', 'hebron-children', 'uzziel-connector', 'uzziel-children'
    ],
    'izhar-node': [
        'izhar-connector', 'izhar-children', 'korah-connector', 'korah-children'
    ],
    'izhar-children': [
        'izhar-connector', 'izhar-children', 'korah-connector', 'korah-children'
    ],
    'korah-node': [
        'korah-connector', 'korah-children'
    ],
    'korah-children': [
        'korah-connector', 'korah-children'
    ],
    'hebron-node': [
        'hebron-connector', 'hebron-children'
    ],
    'hebron-children': [
        'hebron-connector', 'hebron-children'
    ],
    'uzziel-node': [
        'uzziel-connector', 'uzziel-children'
    ],
    'uzziel-children': [
        'uzziel-connector', 'uzziel-children'
    ],
    'amram-node': [
        'amram-connector', 'amram-children', 'aaron-connector', 'aaron-children', 'eleazar-connector', 'eleazar-children', 'moses-connector', 'moses-children', 'gershom-moses-connector', 'gershom-moses-children', 'eliezer-connector', 'eliezer-children', 'rehabiah-connector', 'rehabiah-children'
    ],
    'amram-children': [
        'amram-connector', 'amram-children', 'aaron-connector', 'aaron-children', 'eleazar-connector', 'eleazar-children', 'moses-connector', 'moses-children', 'gershom-moses-connector', 'gershom-moses-children', 'eliezer-connector', 'eliezer-children', 'rehabiah-connector', 'rehabiah-children'
    ],
    'moses-node': [
        'moses-connector', 'moses-children', 'gershom-moses-connector', 'gershom-moses-children', 'eliezer-connector', 'eliezer-children', 'rehabiah-connector', 'rehabiah-children'
    ],
    'moses-children': [
        'moses-connector', 'moses-children', 'gershom-moses-connector', 'gershom-moses-children', 'eliezer-connector', 'eliezer-children', 'rehabiah-connector', 'rehabiah-children'
    ],
    'gershom-moses-node': [
        'gershom-moses-connector', 'gershom-moses-children'
    ],
    'gershom-moses-children': [
        'gershom-moses-connector', 'gershom-moses-children'
    ],
    'eliezer-node': [
        'eliezer-connector', 'eliezer-children', 'rehabiah-connector', 'rehabiah-children'
    ],
    'eliezer-children': [
        'eliezer-connector', 'eliezer-children', 'rehabiah-connector', 'rehabiah-children'
    ],
    'rehabiah-node': [
        'rehabiah-connector', 'rehabiah-children'
    ],
    'rehabiah-children': [
        'rehabiah-connector', 'rehabiah-children'
    ],
    'aaron-node': [
        'aaron-connector', 'aaron-children', 'eleazar-connector', 'eleazar-children'
    ],
    'aaron-children': [
        'aaron-connector', 'aaron-children', 'eleazar-connector', 'eleazar-children'
    ],
    'eleazar-node': [
        'eleazar-connector', 'eleazar-children'
    ],
    'eleazar-children': [
        'eleazar-connector', 'eleazar-children'
    ],
    'gershon-node': [
        'gershon-connector', 'gershon-children', 'libni-connector', 'libni-children', 'jahath-connector', 'jahath-children', 'zimmah-connector', 'zimmah-children', 'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'gershon-children': [
        'gershon-connector', 'gershon-children', 'libni-connector', 'libni-children', 'jahath-connector', 'jahath-children', 'zimmah-connector', 'zimmah-children', 'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'libni-node': [
        'libni-connector', 'libni-children', 'jahath-connector', 'jahath-children', 'zimmah-connector', 'zimmah-children', 'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'libni-children': [
        'libni-connector', 'libni-children', 'jahath-connector', 'jahath-children', 'zimmah-connector', 'zimmah-children', 'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'jahath-node': [
        'jahath-connector', 'jahath-children', 'zimmah-connector', 'zimmah-children', 'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'jahath-children': [
        'jahath-connector', 'jahath-children', 'zimmah-connector', 'zimmah-children', 'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'zimmah-node': [
        'zimmah-connector', 'zimmah-children', 'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'zimmah-children': [
        'zimmah-connector', 'zimmah-children', 'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'joah-node': [
        'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'joah-children': [
        'joah-connector', 'joah-children', 'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'iddo-node': [
        'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'iddo-children': [
        'iddo-connector', 'iddo-children', 'zerah-levite-connector', 'zerah-levite-children'
    ],
    'zerah-levite-node': [
        'zerah-levite-connector', 'zerah-levite-children'
    ],
    'zerah-levite-children': [
        'zerah-levite-connector', 'zerah-levite-children'
    ],

    'simeon-node': [
        'simeon-connector', 'simeon-children', 'shaul-connector', 'shaul-children', 'shallum-connector', 'shallum-children', 'mibsam-connector', 'mibsam-children', 'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'simeon-children': [
        'simeon-connector', 'simeon-children', 'shaul-connector', 'shaul-children', 'shallum-connector', 'shallum-children', 'mibsam-connector', 'mibsam-children', 'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'shaul-node': [
        'shaul-connector', 'shaul-children', 'shallum-connector', 'shallum-children', 'mibsam-connector', 'mibsam-children', 'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'shaul-children': [
        'shaul-connector', 'shaul-children', 'shallum-connector', 'shallum-children', 'mibsam-connector', 'mibsam-children', 'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'shallum-node': [
        'shallum-connector', 'shallum-children', 'mibsam-connector', 'mibsam-children', 'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'shallum-children': [
        'shallum-connector', 'shallum-children', 'mibsam-connector', 'mibsam-children', 'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'mibsam-node': [
        'mibsam-connector', 'mibsam-children', 'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'mibsam-children': [
        'mibsam-connector', 'mibsam-children', 'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'mishma-node': [
        'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'mishma-children': [
        'mishma-connector', 'mishma-children', 'hammuel-connector', 'hammuel-children'
    ],
    'hammuel-node': [
        'hammuel-connector', 'hammuel-children'
    ],
    'hammuel-children': [
        'hammuel-connector', 'hammuel-children'
    ],
    'reuben-node': [
        'reuben-connector', 'reuben-children', 'pallu-connector', 'pallu-children', 'eliab-connector', 'eliab-children'
    ],
    'reuben-children': [
        'reuben-connector', 'reuben-children', 'pallu-connector', 'pallu-children', 'eliab-connector', 'eliab-children'
    ],
    'pallu-node': [
        'pallu-connector', 'pallu-children', 'eliab-connector', 'eliab-children'
    ],
    'pallu-children': [
        'pallu-connector', 'pallu-children', 'eliab-connector', 'eliab-children'
    ],
    'eliab-node': [
        'eliab-connector', 'eliab-children'
    ],
    'eliab-children': [
        'eliab-connector', 'eliab-children'
    ],
    'joseph-node': [
        'joseph-connector', 'joseph-children'
    ],
    'joseph-children': [
        'joseph-connector', 'joseph-children'
    ],
    'esau-node': [
        'esau-connector', 'esau-children', 'eliphaz-connector', 'eliphaz-children', 'reuel-connector', 'reuel-children'
    ],
    'esau-children': [
        'esau-connector', 'esau-children', 'eliphaz-connector', 'eliphaz-children', 'reuel-connector', 'reuel-children'
    ],
    'eliphaz-node': [
        'eliphaz-connector', 'eliphaz-children'
    ],
    'eliphaz-children': [
        'eliphaz-connector', 'eliphaz-children'
    ],
    'reuel-node': [
        'reuel-connector', 'reuel-children'
    ],
    'reuel-children': [
        'reuel-connector', 'reuel-children'
    ],
    'esau-rebekah-node': [
        'esau-rebekah-connector', 'esau-rebekah-children', 'eliphaz-rebekah-connector', 'eliphaz-rebekah-children', 'reuel-rebekah-connector', 'reuel-rebekah-children'
    ],
    'esau-rebekah-children': [
        'esau-rebekah-connector', 'esau-rebekah-children', 'eliphaz-rebekah-connector', 'eliphaz-rebekah-children', 'reuel-rebekah-connector', 'reuel-rebekah-children'
    ],
    'eliphaz-rebekah-node': [
        'eliphaz-rebekah-connector', 'eliphaz-rebekah-children'
    ],
    'eliphaz-rebekah-children': [
        'eliphaz-rebekah-connector', 'eliphaz-rebekah-children'
    ],
    'reuel-rebekah-node': [
        'reuel-rebekah-connector', 'reuel-rebekah-children'
    ],
    'reuel-rebekah-children': [
        'reuel-rebekah-connector', 'reuel-rebekah-children'
    ],
    'ishmael-node': [
        'ishmael-connector', 'ishmael-children'
    ],
    'ishmael-children': [
        'ishmael-connector', 'ishmael-children'
    ],
    'jokshan-node': [
        'jokshan-connector', 'jokshan-children', 'dedan-connector', 'dedan-children'
    ],
    'jokshan-children': [
        'jokshan-connector', 'jokshan-children', 'dedan-connector', 'dedan-children'
    ],
    'dedan-node': [
        'dedan-connector', 'dedan-children'
    ],
    'dedan-children': [
        'dedan-connector', 'dedan-children'
    ],
    'midian-node': [
        'midian-connector', 'midian-children'
    ],
    'midian-children': [
        'midian-connector', 'midian-children'
    ],
    'nahor-node': [
        'nahor-connector', 'nahor-children', 'bethuel-connector', 'bethuel-children',
        'laban-connector', 'laban-children'
    ],
    'nahor-children': [
        'bethuel-connector', 'bethuel-children',
        'laban-connector', 'laban-children'
    ],
    'bethuel-node': [
        'bethuel-connector', 'bethuel-children', 'laban-connector', 'laban-children'
    ],
    'bethuel-children': [
        'laban-connector', 'laban-children'
    ],
    'laban-node': [
        'laban-connector', 'laban-children'
    ],
    'rebekah-node': [],
    'haran-node': [
        'haran-connector', 'haran-children', 'lot-connector', 'lot-children'
    ],
    'lot-node': [
        'lot-connector', 'lot-children'
    ],
    'ham-node': [
        'ham-connector', 'ham-children',
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-children',
        'put-node',
        'canaan-node', 'canaan-connector', 'canaan-children'
    ],
    'ham-children': [
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-children',
        'put-node',
        'canaan-node', 'canaan-connector', 'canaan-children'
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
    'gomer-node': [
        'gomer-connector', 'gomer-children'
    ],
    'javan-node': [
        'javan-connector', 'javan-children'
    ],
    'japheth-node': [
        'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children',
        'magog-node', 'madai-node',
        'javan-node', 'javan-connector', 'javan-children',
        'tubal-node', 'meshech-japheth-node', 'tiras-node'
    ],
    'japheth-children': [
        'gomer-node', 'gomer-connector', 'gomer-children',
        'magog-node', 'madai-node',
        'javan-node', 'javan-connector', 'javan-children',
        'tubal-node', 'meshech-japheth-node', 'tiras-node'
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
        'shem-node', 'shem-connector', 'shem-children', 'elam-node', 'asshur-node', 'arphaxad-node', 'lud-node', 'aram-node', 'aram-connector', 'aram-children',
        'shelah-connector', 'shelah-node', 'eber-connector', 'eber-node',
        'eber-children-connector', 'eber-children', 'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children',
        'ham-node', 'ham-connector', 'ham-children', 
        'cush-node', 'cush-connector', 'cush-children', 'raamah-node', 'raamah-connector', 'raamah-children',
        'mizraim-node', 'mizraim-children', 'put-node', 'canaan-node', 'canaan-connector', 'canaan-children',
        'japheth-node', 'japheth-connector', 'japheth-children',
        'gomer-node', 'gomer-connector', 'gomer-children', 'magog-node', 'madai-node', 'javan-node', 'javan-connector', 'javan-children', 'tubal-node', 'meshech-japheth-node', 'tiras-node'
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
    'aram-node': 'aram-connector',
    'aram-children': 'aram-connector',
    'shelah-node': 'shelah-connector',
    'eber-node': 'eber-connector',
    'eber-children': 'eber-children-connector',
    'joktan-node': 'joktan-connector',
    'joktan-children': 'joktan-connector',
    'reu-node': 'reu-connector',
    'serug-node': 'serug-connector',
    'nahor-ancestor-node': 'nahor-ancestor-connector',
    'terah-node': 'terah-connector',
    'terah-children': 'terah-children-connector',
    'abraham-node': 'abraham-connector',
    'abraham-children': 'abraham-connector',
    'isaac-node': 'isaac-connector',
    'isaac-children': 'isaac-connector',
    'jacob-node': 'jacob-connector',
    'jacob-children': 'jacob-connector',
    'reuben-node': 'reuben-connector',
    'reuben-children': 'reuben-connector',
    'simeon-node': 'simeon-connector',
    'simeon-children': 'simeon-connector',
    'levi-node': 'levi-connector',
    'levi-children': 'levi-connector',
    'dan-node': 'dan-connector',
    'dan-children': 'dan-connector',
    'naphtali-node': 'naphtali-connector',
    'naphtali-children': 'naphtali-connector',
    'gad-node': 'gad-connector',
    'gad-children': 'gad-connector',
    'asher-node': 'asher-connector',
    'asher-children': 'asher-connector',
    'beriah-node': 'beriah-connector',
    'beriah-children': 'beriah-connector',
    'issachar-node': 'issachar-connector',
    'issachar-children': 'issachar-connector',
    'zebulun-node': 'zebulun-connector',
    'zebulun-children': 'zebulun-connector',
    'benjamin-node': 'benjamin-connector',
    'benjamin-children': 'benjamin-connector',
    'judah-node': 'judah-connector',
    'judah-children': 'judah-connector',
    'perez-node': 'perez-connector',
    'perez-children': 'perez-connector',
    'hezron-perez-node': 'hezron-perez-connector',
    'hezron-perez-children': 'hezron-perez-connector',
    'ram-node': 'ram-connector',
    'ram-children': 'ram-connector',
    'amminadab-node': 'amminadab-connector',
    'amminadab-children': 'amminadab-connector',
    'nahshon-node': 'nahshon-connector',
    'nahshon-children': 'nahshon-connector',
    'salmon-node': 'salmon-connector',
    'salmon-children': 'salmon-connector',
    'boaz-node': 'boaz-connector',
    'boaz-children': 'boaz-connector',
    'obed-node': 'obed-connector',
    'obed-children': 'obed-connector',
    'jesse-node': 'jesse-connector',
    'jesse-children': 'jesse-connector',
    'david-node': 'david-connector',
    'david-children': 'david-connector',
    'solomon-node': 'solomon-connector',
    'solomon-children': 'solomon-connector',
    'nathan-node': 'nathan-connector',
    'nathan-children': 'nathan-connector',
    'gershon-node': 'gershon-connector',
    'gershon-children': 'gershon-connector',
    'libni-node': 'libni-connector',
    'libni-children': 'libni-connector',
    'jahath-node': 'jahath-connector',
    'jahath-children': 'jahath-connector',
    'zimmah-node': 'zimmah-connector',
    'zimmah-children': 'zimmah-connector',
    'joah-node': 'joah-connector',
    'joah-children': 'joah-connector',
    'iddo-node': 'iddo-connector',
    'iddo-children': 'iddo-connector',
    'zerah-levite-node': 'zerah-levite-connector',
    'zerah-levite-children': 'zerah-levite-connector',
    'merari-node': 'merari-connector',
    'merari-children': 'merari-connector',
    'mahli-node': 'mahli-connector',
    'mahli-children': 'mahli-connector',
    'mushi-node': 'mushi-connector',
    'mushi-children': 'mushi-connector',
    'kohath-node': 'kohath-connector',
    'kohath-children': 'kohath-connector',
    'izhar-node': 'izhar-connector',
    'izhar-children': 'izhar-connector',
    'korah-node': 'korah-connector',
    'korah-children': 'korah-connector',
    'hebron-node': 'hebron-connector',
    'hebron-children': 'hebron-connector',
    'uzziel-node': 'uzziel-connector',
    'uzziel-children': 'uzziel-connector',
    'amram-node': 'amram-connector',
    'amram-children': 'amram-connector',
    'moses-node': 'moses-connector',
    'moses-children': 'moses-connector',
    'gershom-moses-node': 'gershom-moses-connector',
    'gershom-moses-children': 'gershom-moses-connector',
    'eliezer-node': 'eliezer-connector',
    'eliezer-children': 'eliezer-connector',
    'rehabiah-node': 'rehabiah-connector',
    'rehabiah-children': 'rehabiah-connector',
    'aaron-node': 'aaron-connector',
    'aaron-children': 'aaron-connector',
    'eleazar-node': 'eleazar-connector',
    'eleazar-children': 'eleazar-connector',
    'shaul-node': 'shaul-connector',
    'shaul-children': 'shaul-connector',
    'shallum-node': 'shallum-connector',
    'shallum-children': 'shallum-connector',
    'mibsam-node': 'mibsam-connector',
    'mibsam-children': 'mibsam-connector',
    'mishma-node': 'mishma-connector',
    'mishma-children': 'mishma-connector',
    'hammuel-node': 'hammuel-connector',
    'hammuel-children': 'hammuel-connector',
    'pallu-node': 'pallu-connector',
    'pallu-children': 'pallu-connector',
    'eliab-node': 'eliab-connector',
    'eliab-children': 'eliab-connector',
    'joseph-node': 'joseph-connector',
    'joseph-children': 'joseph-connector',
    'esau-node': 'esau-connector',
    'esau-children': 'esau-connector',
    'eliphaz-node': 'eliphaz-connector',
    'eliphaz-children': 'eliphaz-connector',
    'reuel-node': 'reuel-connector',
    'reuel-children': 'reuel-connector',
    'esau-rebekah-node': 'esau-rebekah-connector',
    'esau-rebekah-children': 'esau-rebekah-connector',
    'eliphaz-rebekah-node': 'eliphaz-rebekah-connector',
    'eliphaz-rebekah-children': 'eliphaz-rebekah-connector',
    'reuel-rebekah-node': 'reuel-rebekah-connector',
    'reuel-rebekah-children': 'reuel-rebekah-connector',
    'ishmael-node': 'ishmael-connector',
    'ishmael-children': 'ishmael-connector',
    'jokshan-node': 'jokshan-connector',
    'jokshan-children': 'jokshan-connector',
    'dedan-node': 'dedan-connector',
    'dedan-children': 'dedan-connector',
    'midian-node': 'midian-connector',
    'midian-children': 'midian-connector',
    'nahor-node': 'nahor-connector',
    'nahor-children': 'nahor-connector',
    'haran-node': 'haran-connector',
    'haran-children': 'haran-connector',
    'lot-node': 'lot-connector',
    'lot-children': 'lot-connector',
    'bethuel-node': 'bethuel-connector',
    'bethuel-children': 'bethuel-connector',
    'laban-node': 'laban-connector',
    'laban-children': 'laban-connector',
    'rebekah-node': 'rebekah-connector',
    'rebekah-children': 'rebekah-connector',
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
    'japheth-children': 'japheth-connector',
    'gomer-node': 'gomer-connector',
    'gomer-children': 'gomer-connector',
    'javan-node': 'javan-connector',
    'javan-children': 'javan-connector'
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
    'aram-node': 'shem-children',
    'aram-children': 'aram-node',
    'shelah-node': 'arphaxad-node',
    'eber-node': 'shelah-node',
    'eber-children': 'eber-node',
    'joktan-node': 'eber-children',
    'joktan-children': 'joktan-node',
    'reu-node': 'peleg-node',
    'serug-node': 'reu-node',
    'nahor-ancestor-node': 'serug-node',
    'terah-node': 'nahor-ancestor-node',
    'terah-children': 'terah-node',
    'abraham-node': 'terah-children',
    'abraham-children': 'abraham-node',
    'isaac-node': 'abraham-children',
    'isaac-children': 'isaac-node',
    'jacob-node': 'isaac-children',
    'jacob-children': 'jacob-node',
    'reuben-node': 'jacob-children',
    'reuben-children': 'reuben-node',
    'simeon-node': 'jacob-children',
    'simeon-children': 'simeon-node',
    'levi-node': 'jacob-children',
    'levi-children': 'levi-node',
    'dan-node': 'jacob-children',
    'dan-children': 'dan-node',
    'hushim-node': 'dan-children',
    'naphtali-node': 'jacob-children',
    'naphtali-children': 'naphtali-node',
    'jahzeel-node': 'naphtali-children',
    'guni-node': 'naphtali-children',
    'jezer-node': 'naphtali-children',
    'shillem-node': 'naphtali-children',
    'gad-node': 'jacob-children',
    'gad-children': 'gad-node',
    'ziphion-node': 'gad-children',
    'haggi-node': 'gad-children',
    'shuni-node': 'gad-children',
    'ezbon-node': 'gad-children',
    'eri-node': 'gad-children',
    'arodi-node': 'gad-children',
    'areli-node': 'gad-children',
    'asher-node': 'jacob-children',
    'asher-children': 'asher-node',
    'imnah-node': 'asher-children',
    'ishvah-node': 'asher-children',
    'ishvi-node': 'asher-children',
    'beriah-node': 'asher-children',
    'beriah-children': 'beriah-node',
    'heber-beriah-node': 'beriah-children',
    'malchiel-node': 'beriah-children',
    'serah-asher-node': 'asher-children',
    'issachar-node': 'jacob-children',
    'issachar-children': 'issachar-node',
    'tola-node': 'issachar-children',
    'puvah-node': 'issachar-children',
    'job-issachar-node': 'issachar-children',
    'shimron-node': 'issachar-children',
    'zebulun-node': 'jacob-children',
    'zebulun-children': 'zebulun-node',
    'sered-node': 'zebulun-children',
    'elon-node': 'zebulun-children',
    'jahleel-node': 'zebulun-children',
    'benjamin-node': 'jacob-children',
    'benjamin-children': 'benjamin-node',
    'bela-node': 'benjamin-children',
    'becher-node': 'benjamin-children',
    'ashbel-node': 'benjamin-children',
    'gera-node': 'benjamin-children',
    'naaman-benjamin-node': 'benjamin-children',
    'ehi-node': 'benjamin-children',
    'rosh-node': 'benjamin-children',
    'muppim-node': 'benjamin-children',
    'huppim-node': 'benjamin-children',
    'ard-node': 'benjamin-children',
    'judah-node': 'jacob-children',
    'judah-children': 'judah-node',
    'er-node': 'judah-children',
    'onan-node': 'judah-children',
    'shelah-judah-node': 'judah-children',
    'perez-node': 'judah-children',
    'perez-children': 'perez-node',
    'hezron-perez-node': 'perez-children',
    'hezron-perez-children': 'hezron-perez-node',
    'jerahmeel-node': 'hezron-perez-children',
    'ram-node': 'hezron-perez-children',
    'ram-children': 'ram-node',
    'amminadab-node': 'ram-children',
    'amminadab-children': 'amminadab-node',
    'nahshon-node': 'amminadab-children',
    'nahshon-children': 'nahshon-node',
    'salmon-node': 'nahshon-children',
    'salmon-children': 'salmon-node',
    'boaz-node': 'salmon-children',
    'boaz-children': 'boaz-node',
    'obed-node': 'boaz-children',
    'obed-children': 'obed-node',
    'jesse-node': 'obed-children',
    'jesse-children': 'jesse-node',
    'eliab-jesse-node': 'jesse-children',
    'abinadab-node': 'jesse-children',
    'shammah-jesse-node': 'jesse-children',
    'nethanel-node': 'jesse-children',
    'raddai-node': 'jesse-children',
    'ozem-node': 'jesse-children',
    'david-node': 'jesse-children',
    'david-children': 'david-node',
    'amnon-node': 'david-children',
    'daniel-david-node': 'david-children',
    'absalom-node': 'david-children',
    'adonijah-node': 'david-children',
    'shephatiah-node': 'david-children',
    'ithream-node': 'david-children',
    'shammua-node': 'david-children',
    'shobab-node': 'david-children',
    'nathan-node': 'david-children',
    'nathan-children': 'nathan-node',
    'solomon-node': 'david-children',
    'solomon-children': 'solomon-node',
    'ibhar-node': 'david-children',
    'elishua-node': 'david-children',
    'elpelet-node': 'david-children',
    'nogah-node': 'david-children',
    'nepheg-david-node': 'david-children',
    'japhia-node': 'david-children',
    'elishama-david-node': 'david-children',
    'eliada-node': 'david-children',
    'eliphelet-david-node': 'david-children',
    'elisheba-node': 'amminadab-children',
    'caleb-hezron-node': 'hezron-perez-children',
    'hamul-node': 'perez-children',
    'zerah-judah-node': 'judah-children',
    'gershon-node': 'levi-children',
    'gershon-children': 'gershon-node',
    'libni-node': 'gershon-children',
    'libni-children': 'libni-node',
    'jahath-node': 'libni-children',
    'jahath-children': 'jahath-node',
    'zimmah-node': 'jahath-children',
    'zimmah-children': 'zimmah-node',
    'joah-node': 'zimmah-children',
    'joah-children': 'joah-node',
    'iddo-node': 'joah-children',
    'iddo-children': 'iddo-node',
    'zerah-levite-node': 'iddo-children',
    'zerah-levite-children': 'zerah-levite-node',
    'merari-node': 'levi-children',
    'merari-children': 'merari-node',
    'mahli-node': 'merari-children',
    'mahli-children': 'mahli-node',
    'eleazar-mahli-node': 'mahli-children',
    'kish-mahli-node': 'mahli-children',
    'mushi-node': 'merari-children',
    'mushi-children': 'mushi-node',
    'mahli-mushi-node': 'mushi-children',
    'eder-mushi-node': 'mushi-children',
    'jerimoth-mushi-node': 'mushi-children',
    'kohath-node': 'levi-children',
    'kohath-children': 'kohath-node',
    'izhar-node': 'kohath-children',
    'izhar-children': 'izhar-node',
    'korah-node': 'izhar-children',
    'korah-children': 'korah-node',
    'assir-node': 'korah-children',
    'elkanah-node': 'korah-children',
    'abiasaph-node': 'korah-children',
    'nepheg-node': 'izhar-children',
    'zichri-node': 'izhar-children',
    'hebron-node': 'kohath-children',
    'hebron-children': 'hebron-node',
    'jeriah-node': 'hebron-children',
    'amariah-hebron-node': 'hebron-children',
    'jahaziel-node': 'hebron-children',
    'jekameam-node': 'hebron-children',
    'uzziel-node': 'kohath-children',
    'uzziel-children': 'uzziel-node',
    'mishael-node': 'uzziel-children',
    'elzaphan-node': 'uzziel-children',
    'sithri-node': 'uzziel-children',
    'micah-node': 'uzziel-children',
    'isshiah-node': 'uzziel-children',
    'amram-node': 'kohath-children',
    'amram-children': 'amram-node',
    'moses-node': 'amram-children',
    'moses-children': 'moses-node',
    'gershom-moses-node': 'moses-children',
    'gershom-moses-children': 'gershom-moses-node',
    'shubael-node': 'gershom-moses-children',
    'eliezer-node': 'moses-children',
    'eliezer-children': 'eliezer-node',
    'rehabiah-node': 'eliezer-children',
    'rehabiah-children': 'rehabiah-node',
    'aaron-node': 'amram-children',
    'aaron-children': 'aaron-node',
    'eleazar-node': 'aaron-children',
    'eleazar-children': 'eleazar-node',
    'shaul-node': 'simeon-children',
    'shaul-children': 'shaul-node',
    'shallum-node': 'shaul-children',
    'shallum-children': 'shallum-node',
    'mibsam-node': 'shallum-children',
    'mibsam-children': 'mibsam-node',
    'mishma-node': 'mibsam-children',
    'mishma-children': 'mishma-node',
    'hammuel-node': 'mishma-children',
    'hammuel-children': 'hammuel-node',
    'pallu-node': 'reuben-children',
    'pallu-children': 'pallu-node',
    'eliab-node': 'pallu-children',
    'eliab-children': 'eliab-node',
    'joseph-node': 'jacob-children',
    'joseph-children': 'joseph-node',
    'manasseh-node': 'joseph-children',
    'ephraim-node': 'joseph-children',
    'esau-node': 'isaac-children',
    'esau-children': 'esau-node',
    'eliphaz-node': 'esau-children',
    'eliphaz-children': 'eliphaz-node',
    'reuel-node': 'esau-children',
    'reuel-children': 'reuel-node',
    'esau-rebekah-node': 'rebekah-children',
    'esau-rebekah-children': 'esau-rebekah-node',
    'eliphaz-rebekah-node': 'esau-rebekah-children',
    'eliphaz-rebekah-children': 'eliphaz-rebekah-node',
    'reuel-rebekah-node': 'esau-rebekah-children',
    'reuel-rebekah-children': 'reuel-rebekah-node',
    'ishmael-node': 'abraham-children',
    'ishmael-children': 'ishmael-node',
    'jokshan-node': 'abraham-children',
    'jokshan-children': 'jokshan-node',
    'dedan-node': 'jokshan-children',
    'dedan-children': 'dedan-node',
    'midian-node': 'abraham-children',
    'midian-children': 'midian-node',
    'nahor-node': 'terah-children',
    'nahor-children': 'nahor-node',
    'bethuel-node': 'nahor-children',
    'bethuel-children': 'bethuel-node',
    'laban-node': 'bethuel-children',
    'laban-children': 'laban-node',
    'rebekah-node': 'bethuel-children',
    'haran-node': 'terah-children',
    'haran-children': 'haran-node',
    'lot-node': 'haran-children',
    'lot-children': 'lot-node',
    'elam-node': 'shem-children',
    'asshur-node': 'shem-children',
    'lud-node': 'shem-children',
    'ham-node': 'noah-children',
    'ham-children': 'ham-node',
    'cush-node': 'ham-children',
    'cush-children': 'cush-node',
    'raamah-node': 'cush-children',
    'raamah-children': 'raamah-node',
    'mizraim-node': 'ham-children',
    'mizraim-children': 'mizraim-node',
    'put-node': 'ham-children',
    'canaan-node': 'ham-children',
    'canaan-children': 'canaan-node',
    'japheth-node': 'noah-children',
    'japheth-children': 'japheth-node',
    'gomer-node': 'japheth-children',
    'gomer-children': 'gomer-node',
    'magog-node': 'japheth-children',
    'madai-node': 'japheth-children',
    'javan-node': 'japheth-children',
    'javan-children': 'javan-node',
    'tubal-node': 'japheth-children',
    'meshech-japheth-node': 'japheth-children',
    'tiras-node': 'japheth-children'
};

// ============================================================
// PART 2A — RESTORED LEGACY TREE HELPER FUNCTIONS & BUILDER
// ============================================================

// Utility: create a DOM element with optional id, classes and attributes
function el(tag, opts = {}) {
    const e = document.createElement(tag);
    if (opts.id)      e.id = opts.id;
    if (opts.cls)     e.className = opts.cls;
    if (opts.html)    e.innerHTML = opts.html;
    if (opts.text)    e.textContent = opts.text;
    if (opts.onclick) e.onclick = opts.onclick;
    if (opts.attrs)   Object.entries(opts.attrs).forEach(([k, v]) => e.setAttribute(k, v));
    return e;
}

// Build details inner HTML from a genealogy entry
function buildDetailsHtml(node) {
    if (!node.details || node.details.length === 0) return '';
    const parts = node.details.map((d, i) => {
        if (i === 0) return `<strong>${d}</strong>`;
        return d;
    });
    return `<div class="details">${parts.join('<br>')}</div>`;
}

// Build the badge button for a node (emoji / cross / special SVGs)
function buildBadgeHtml(node) {
    const id = node.id;
    const emoji = node.emoji;

    // Special SVG badges for Enoch and Noah
    if (id === 'seth-enoch') {
        return `<button class="info-badge enoch-info-badge" type="button" aria-label="More about Enoch" onclick="event.stopPropagation(); toggleEnochInfo()"><svg width="17" height="17" viewBox="0 0 24 24" fill="#fbbf24"><ellipse cx="6.5" cy="15.5" rx="2.5" ry="4.2" transform="rotate(-10 6.5 15.5)"/><circle cx="4.8" cy="9.2" r="1.15"/><circle cx="6.8" cy="9.5" r="0.98"/><circle cx="8.6" cy="10.4" r="0.85"/><circle cx="9.9" cy="11.7" r="0.72"/><ellipse cx="17.2" cy="8.5" rx="2.5" ry="4.2" transform="rotate(10 17.2 8.5)"/><circle cx="14.8" cy="2.8" r="1.15"/><circle cx="16.8" cy="3.1" r="0.98"/><circle cx="18.6" cy="4.0" r="0.85"/><circle cx="19.9" cy="5.3" r="0.72"/></svg></button>`;
    }
    if (id === 'noah') {
        return `<button class="info-badge noah-info-badge" type="button" aria-label="More about Noah" onclick="event.stopPropagation(); toggleNoahInfo()"><svg width="17" height="17" viewBox="0 0 24 24" fill="#fbbf24"><path d="M6 9.5L12 4l6 5.5H6z"/><path d="M7.5 9.5h9v3.5h-9V9.5z"/><path d="M2 13c1.5 5.5 6 7 10 7s8.5-1.5 10-7H2z"/><path d="M10 10.5h1.5v1.5H10v-1.5zm2.5 0H14v1.5h-1.5v-1.5z" fill="#0f172a"/></svg></button>`;
    }

    if (!emoji) return '';

    // Determine badge class and toggle function
    const badgeMap = {
        'root': { cls: 'adam-info-badge',  fn: 'toggleAdamInfo()' },
        'cain': { cls: 'cain-info-badge',  fn: 'toggleCainInfo()' },
        'abel': { cls: 'abel-info-badge',  fn: 'toggleAbelInfo()' },
        'seth': { cls: 'cross-info-badge', fn: 'toggleSethInfo()' },
        'shem': { cls: 'cross-info-badge', fn: 'toggleShemInfo()' },
        'arphaxad': { cls: 'cross-info-badge', fn: 'toggleArphaxadInfo()' },
        'shelah':   { cls: 'cross-info-badge', fn: 'toggleShelahInfo()' },
        'eber':     { cls: 'cross-info-badge', fn: 'toggleEberInfo()' },
        'peleg':    { cls: 'cross-info-badge', fn: 'togglePelegInfo()' },
        'reu':      { cls: 'cross-info-badge', fn: 'toggleReuInfo()' },
        'serug':    { cls: 'cross-info-badge', fn: 'toggleSerugInfo()' },
        'nahor-ancestor': { cls: 'cross-info-badge', fn: 'toggleNahorAncestorInfo()' },
        'terah':    { cls: 'cross-info-badge', fn: 'toggleTerahInfo()' },
        'abraham':  { cls: 'cross-info-badge', fn: 'toggleAbrahamInfo()' },
        'ishmael':  { cls: 'cross-info-badge', fn: 'toggleIshmaelInfo()' },
        'jokshan':  { cls: 'cross-info-badge', fn: 'toggleJokshanInfo()' },
        'dedan':    { cls: 'cross-info-badge', fn: 'toggleDedanInfo()' },
        'midian':   { cls: 'cross-info-badge', fn: 'toggleMidianInfo()' },
        'isaac':    { cls: 'cross-info-badge', fn: 'toggleIsaacInfo(event)' },
        'bethuel':  { cls: 'cross-info-badge', fn: 'toggleBethuelInfo()' },
        'laban':    { cls: 'cross-info-badge', fn: 'toggleLabanInfo()' },
        'leah':     { cls: 'cross-info-badge', fn: 'toggleLeahInfo()' },
        'rachel':   { cls: 'cross-info-badge', fn: 'toggleRachelInfo()' },
        'bilhah':   { cls: 'cross-info-badge', fn: 'toggleBilhahInfo()' },
        'zilpah':   { cls: 'cross-info-badge', fn: 'toggleZilpahInfo()' },
        'rebekah':  { cls: 'cross-info-badge', fn: 'toggleRebekahInfo()' },
        'esau':     { cls: 'cross-info-badge', fn: 'toggleEsauInfo(event)' },
        'jacob':    { cls: 'cross-info-badge', fn: 'toggleJacobInfo(event)' },
        'lot':      { cls: 'cross-info-badge', fn: 'toggleLotInfo()' },
        'moab':     { cls: 'cross-info-badge', fn: 'toggleMoabInfo()' },
        'ben-ammi': { cls: 'cross-info-badge', fn: 'toggleBenAmmiInfo()' },
    };

    const info = badgeMap[id];
    if (info) {
        return `<button class="info-badge ${info.cls}" type="button" aria-label="More info" onclick="event.stopPropagation(); ${info.fn}">${emoji}</button>`;
    }
    return `<span class="info-badge">${emoji}</span>`;
}

// Determine extra CSS classes for special nodes
function getNodeExtraClasses(node) {
    const classes = [];
    if (node.id === 'cain')       classes.push('cain');
    if (node.id === 'abel')       classes.push('abel');
    if (node.id === 'seth')       classes.push('seth');
    if (node.id === 'seth-enoch') classes.push('seth');
    if (node.id === 'noah')       classes.push('seth');
    return classes.join(' ');
}

// IDs that have a <span class="node-title"> wrapper
const TITLE_WRAP_IDS = new Set([
    'root','cain','abel','seth','seth-enoch','noah',
    'shem','arphaxad','shelah','eber','peleg','reu','serug',
    'nahor-ancestor','terah','abraham','isaac','esau','jacob',
    'reuben','pallu','eliab','simeon','levi','gershon','libni',
    'jahath','zimmah','joah','iddo','zerah-levite','merari',
    'kohath','izhar','amram','moses','gershom-moses','eliezer',
    'rehabiah','aaron','eleazar','shaul','shallum','mibsam',
    'mishma','hammuel','joseph','ishmael','jokshan','dedan',
    'midian','nahor','haran','lot','bethuel','laban','rebekah',
    'leah','rachel','bilhah','zilpah','moab','ben-ammi',
    'ham','cush','raamah','mizraim','canaan','japheth','gomer','javan',
    'korah','assir','elkanah','abiasaph',
    'hebron','jeriah','amariah-hebron','jahaziel','jekameam',
    'uzziel','mishael','elzaphan','sithri','micah','isshiah',
    'mahli','mushi','eleazar-mahli','kish-mahli','mahli-mushi','eder-mushi','jerimoth-mushi',
    'dan','hushim',
    'naphtali','jahzeel','guni','jezer','shillem',
    'gad','ziphion','haggi','shuni','ezbon','eri','arodi','areli',
    'asher','imnah','ishvah','ishvi','beriah','heber-beriah','malchiel','serah-asher',
    'issachar','tola','puvah','job-issachar','shimron',
    'zebulun','sered','elon','jahleel',
    'manasseh','ephraim',
    'benjamin','bela','becher','ashbel','gera','naaman-benjamin','ehi','rosh','muppim','huppim','ard',
    'judah','er','onan','shelah-judah','perez','zerah-judah',
    'hezron-perez','hamul',
    'jerahmeel','ram','caleb-hezron',
    'amminadab','nahshon','elisheba',
    'salmon','boaz','obed','jesse',
    'eliab-jesse','abinadab','shammah-jesse','nethanel','raddai','ozem','david',
    'amnon','daniel-david','absalom','adonijah','shephatiah','ithream','shammua','shobab','nathan','solomon','ibhar','elishua','elpelet','nogah','nepheg-david','japhia','elishama-david','eliada','eliphelet-david'
]);

// Build content of a node element
function buildNodeContent(node) {
    const badge = buildBadgeHtml(node);
    const details = buildDetailsHtml(node);
    const useTitleWrap = TITLE_WRAP_IDS.has(node.id);
    const nameHtml = useTitleWrap
        ? `<span class="node-title">${node.name}</span>`
        : node.name;
    return nameHtml + badge + details;
}



// Map single-child linear steps to match legacy click targets
const LINEAR_STEP_CLICK_TARGETS = {
    'cain': 'cain-enoch-node',
    'cain-enoch': 'irad-node',
    'irad': 'mehujael-node',
    'mehujael': 'methushael-node',
    'methushael': 'lamech-node',
    'seth': 'enosh-node',
    'enosh': 'kenan-node',
    'kenan': 'mahalalel-node',
    'mahalalel': 'jared-node',
    'jared': 'seth-enoch-node',
    'seth-enoch': 'methuselah-node',
    'methuselah': 'seth-lamech-node',
    'seth-lamech': 'noah-node',
    'arphaxad': 'shelah-node',
    'shelah': 'eber-node',
    'peleg': 'reu-node',
    'reu': 'serug-node',
    'serug': 'nahor-ancestor-node',
    'nahor-ancestor': 'terah-node'
};

// Derive connector ID directly from targetId (matches revealNext auto-collapse expectations)
function computeConnectorId(targetId) {
    const CUSTOM_CONNECTORS = {
        'gen2-children': 'gen2-connector',
        'lamech-children': 'lamech-children-connector',
        'noah-children': 'noah-children-connector',
        'eber-children': 'eber-children-connector',
        'terah-children': 'terah-children-connector'
    };
    if (CUSTOM_CONNECTORS[targetId]) return CUSTOM_CONNECTORS[targetId];

    if (targetId.endsWith('-node')) {
        return targetId.replace('-node', '-connector');
    }
    if (targetId.endsWith('-children')) {
        return targetId.replace('-children', '-connector');
    }
    return `${targetId}-connector`;
}

// ============================================================
// PART 2B — NEW GENERIC RECURSIVE TREE RENDERER
// ============================================================

const EXPLICIT_NODE_IDS = {
    'elam': 'elam-node',
    'asshur': 'asshur-node',
    'rebekah': 'rebekah-node',
    'lud': 'lud-node',
    'put': 'put-node',
    'magog': 'magog-node',
    'madai': 'madai-node',
    'tubal': 'tubal-node',
    'meshech': 'meshech-japheth-node',
    'tiras': 'tiras-node'
};

// Generic recursive renderer
function renderNode(personId, container, currentColumn = null) {
    const person = nodeMap[personId];
    if (!person) return;

    // 1. Column Container
    let colEl;
    if (personId === 'root') {
        colEl = container;
    } else if (currentColumn) {
        colEl = currentColumn;
    } else {
        colEl = document.createElement('div');
        colEl.className = 'column';
        container.appendChild(colEl);
    }

    // 2. Create Node Element
    const nodeEl = document.createElement('div');
    const special = SPECIAL_BEHAVIORS[personId] || {};

    const classes = ['node'];
    if (special.extraClasses) classes.push(special.extraClasses);
    if (getNodeExtraClasses(person)) classes.push(getNodeExtraClasses(person));

    // Visibility defaults: root, cain, abel, seth visible; others hidden
    if (personId !== 'root' && personId !== 'cain' && personId !== 'abel' && personId !== 'seth') {
        classes.push('hidden');
    }
    nodeEl.className = classes.join(' ');

    // Element ID (matches legacy 100%)
    if (personId === 'root') {
        nodeEl.id = 'root';
    } else if (special.nodeId) {
        nodeEl.id = special.nodeId;
    } else if (EXPLICIT_NODE_IDS[personId]) {
        nodeEl.id = EXPLICIT_NODE_IDS[personId];
    } else if (personId === 'cain' || personId === 'seth') {
        // Legacy passed null for cain and seth node DOM IDs
    } else if (LINEAR_STEP_CLICK_TARGETS[personId] || (childrenMap[personId] && childrenMap[personId].length > 0) || EMPTY_BRANCH_NODES.has(personId)) {
        nodeEl.id = `${personId}-node`;
    }

    nodeEl.innerHTML = buildNodeContent(person);

    // 3. Children Branch Rendering & Click Wiring
    const children = childrenMap[personId] || [];
    const hasBranch = (children.length > 0) || EMPTY_BRANCH_NODES.has(personId);

    if (hasBranch) {
        let targetId;
        if (personId === 'root') {
            targetId = 'gen2-children';
        } else if (LINEAR_STEP_CLICK_TARGETS[personId]) {
            targetId = LINEAR_STEP_CLICK_TARGETS[personId];
        } else {
            targetId = `${personId}-children`;
        }

        if (special.onclick) {
            nodeEl.onclick = special.onclick;
        } else {
            nodeEl.onclick = () => revealNext(targetId);
        }

        colEl.appendChild(nodeEl);

        // Connector Element - derived from targetId!
        const connectorId = computeConnectorId(targetId);
        const connectorEl = document.createElement('div');
        connectorEl.id = connectorId;
        connectorEl.className = 'connector hidden';
        colEl.appendChild(connectorEl);

        // Branch Container Element
        if (children.length === 1 && LINEAR_STEP_CLICK_TARGETS[personId]) {
            // For linear 1-child chain steps, child renders directly into same column
            renderNode(children[0].id, container, colEl);
            return;
        }

        let branchId = (personId === 'root') ? 'gen2-children' : `${personId}-children`;
        const branchEl = document.createElement('div');
        branchEl.id = branchId;
        branchEl.className = 'branch hidden';
        colEl.appendChild(branchEl);

        // Recursively render each child into branch container
        if (children.length > 0) {
            children.forEach(child => {
                renderNode(child.id, branchEl);
            });
        } else if (person.highPriestlySuccession && person.highPriestlySuccession.length > 0) {
            const itemsHtml = person.highPriestlySuccession.map(item => `
                <div class="lineage-item ${item.highlight ? 'highlight-priest' : ''}">
                    <span class="gen-badge ${item.highlight ? 'crown' : ''}">${item.gen}</span>
                    <div class="item-info">
                        <strong>${item.name}</strong>
                        <small>${item.details}</small>
                    </div>
                </div>
                <div class="lineage-item-connector"></div>
            `).join('');

            branchEl.innerHTML = `
                <div class="column">
                    <div class="lineage-card">
                        <div class="lineage-card-header">
                            <h3>👑 High Priestly Succession</h3>
                            <p>1 Chronicles 6:3–15 &amp; Ezra 7:1–5 (${person.highPriestlySuccession.length} Generations)</p>
                        </div>
                        <div class="lineage-card-scroll">
                            ${itemsHtml}
                        </div>
                    </div>
                </div>
            `;
        } else if (person.royalMessianicLine && person.royalMessianicLine.length > 0) {
            const itemsHtml = person.royalMessianicLine.map(item => `
                <div class="lineage-item ${item.highlight ? 'highlight-royal' : ''}">
                    <span class="gen-badge ${item.highlight ? 'royal-star' : ''}">${item.gen}</span>
                    <div class="item-info">
                        <strong>${item.name}</strong>
                        <small>${item.details}</small>
                    </div>
                </div>
                <div class="lineage-item-connector royal-connector"></div>
            `).join('');

            branchEl.innerHTML = `
                <div class="column">
                    <div class="lineage-card royal-card">
                        <div class="lineage-card-header royal-header">
                            <h3>⭐ Royal Messianic Lineage</h3>
                            <p>Matthew 1:6–16 (Solomon to Jesus Christ • ${person.royalMessianicLine.length} Generations)</p>
                        </div>
                        <div class="lineage-card-scroll">
                            ${itemsHtml}
                        </div>
                    </div>
                </div>
            `;
        } else if (person.maternalMessianicLine && person.maternalMessianicLine.length > 0) {
            const itemsHtml = person.maternalMessianicLine.map(item => `
                <div class="lineage-item ${item.highlight ? 'highlight-maternal' : ''}">
                    <span class="gen-badge ${item.highlight ? 'maternal-star' : ''}">${item.gen}</span>
                    <div class="item-info">
                        <strong>${item.name}</strong>
                        <small>${item.details}</small>
                    </div>
                </div>
                <div class="lineage-item-connector maternal-connector"></div>
            `).join('');

            branchEl.innerHTML = `
                <div class="column">
                    <div class="lineage-card maternal-card">
                        <div class="lineage-card-header maternal-header">
                            <h3>⭐ Messianic Lineage (Gospel of Luke)</h3>
                            <p>Luke 3:23–31 (Nathan to Jesus Christ • ${person.maternalMessianicLine.length} Generations)</p>
                        </div>
                        <div class="lineage-card-scroll">
                            ${itemsHtml}
                        </div>
                    </div>
                </div>
            `;
        }

    } else {
        // Leaf Node
        if (special.onclick) {
            nodeEl.onclick = special.onclick;
        }
        colEl.appendChild(nodeEl);
    }
}

// Master tree builder entry point using generic recursive renderer
function buildTree(map, data) {
    const container = document.querySelector('.tree-container');
    nodeMap = map;

    // Group people by parentId
    childrenMap = {};
    data.forEach(person => {
        const pId = person.parentId || 'root';
        if (person.id !== 'root') {
            if (!childrenMap[pId]) childrenMap[pId] = [];
            childrenMap[pId].push(person);
        }
    });

    // Start recursive render from root
    renderNode('root', container);
}

// ============================================================
// PART 3 — INTERACTION LOGIC (unchanged)
// ============================================================

function getParentElementForTarget(targetId) {
    if (targetId === 'cain-enoch-node') return document.querySelector('.node.cain');
    if (targetId === 'enosh-node') return document.querySelector('.node.seth');
    const parentId = parentMap[targetId];
    if (parentId) return document.getElementById(parentId);
    return null;
}

function toggleAbelTheme() {
    const abelNode = document.getElementById('abel-node');
    if (abelNode) {
        scrollToNode('abel-node');
    }
    if (typeof collapseDescendants === 'function') {
        collapseDescendants('cain-enoch-node');
        hideElement('cain-enoch-node');
        hideElement('cain-enoch-connector');
        const cainNode = document.querySelector('.node.cain');
        if (cainNode) cainNode.classList.remove('is-cracked');
    }
    if (typeof collapseDescendants === 'function') {
        collapseDescendants('enosh-node');
        hideElement('enosh-node');
        hideElement('enosh-connector');
        const sethNode = document.querySelector('.node.seth');
        if (sethNode) sethNode.classList.remove('is-cracked');
    }
    document.body.classList.remove('cain-theme', 'seth-theme', 'enoch-theme', 'noah-theme', 'methuselah-theme', 'abraham-theme');
    document.body.classList.toggle('abel-theme');
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.info-badge')) return;
});

function revealNext(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const parentNode = getParentElementForTarget(targetId);
    const isHidden = targetElement.classList.contains('hidden');

    if (isHidden) {
        if (targetId === 'gen2-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'enoch-theme', 'methuselah-theme', 'noah-theme', 'abraham-theme');
            const abelNode = document.getElementById('abel-node');
            if (abelNode) abelNode.classList.remove('is-cracked');
        }

        if (targetId === 'enosh-node' || targetId === 'kenan-node' || targetId === 'mahalalel-node' || targetId === 'jared-node') {
            collapseDescendants('cain-enoch-node');
            hideElement('cain-enoch-node');
            hideElement('cain-enoch-connector');
            const cainNode = document.querySelector('.node.cain');
            if (cainNode) cainNode.classList.remove('is-cracked');
            const abelNode = document.getElementById('abel-node');
            if (abelNode) abelNode.classList.remove('is-cracked');

            document.body.classList.remove('cain-theme', 'abel-theme', 'enoch-theme', 'methuselah-theme', 'noah-theme');
            document.body.classList.add('seth-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.remove('cain-open');
        }

        if (targetId === 'cain-enoch-node') {
            collapseDescendants('enosh-node');
            hideElement('enosh-node');
            hideElement('enosh-connector');
            const sethNode = document.querySelector('.node.seth');
            if (sethNode) sethNode.classList.remove('is-cracked');
            const abelNode = document.getElementById('abel-node');
            if (abelNode) abelNode.classList.remove('is-cracked');

            document.body.classList.remove('seth-theme', 'abel-theme', 'enoch-theme', 'methuselah-theme', 'noah-theme');
            document.body.classList.add('cain-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.add('cain-open');
        }

        if (targetId === 'methuselah-node') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'noah-theme', 'methuselah-theme');
            document.body.classList.add('enoch-theme');
        }

        if (targetId === 'seth-lamech-node') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'enoch-theme', 'noah-theme');
            document.body.classList.add('methuselah-theme');
        }

        if (targetId === 'noah-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'enoch-theme', 'methuselah-theme');
            document.body.classList.add('noah-theme');
        }

        if (targetId === 'lamech-children') {
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.add('cain-open');
        }

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

        if (targetId === 'gomer-children') {
            collapseDescendants('javan-children');
            hideElement('javan-children');
            hideElement('javan-connector');
            const jNode = document.getElementById('javan-node');
            if (jNode) jNode.classList.remove('is-cracked');
        }

        if (targetId === 'javan-children') {
            collapseDescendants('gomer-children');
            hideElement('gomer-children');
            hideElement('gomer-connector');
            const gNode = document.getElementById('gomer-node');
            if (gNode) gNode.classList.remove('is-cracked');
        }

        if (targetId === 'shelah-node') {
            collapseDescendants('aram-children');
            hideElement('aram-children');
            hideElement('aram-connector');
            const aNode = document.getElementById('aram-node');
            if (aNode) aNode.classList.remove('is-cracked');
        }

        if (targetId === 'aram-children') {
            collapseDescendants('shelah-node');
            hideElement('shelah-node');
            hideElement('shelah-connector');
            const arpNode = document.getElementById('arphaxad-node');
            if (arpNode) arpNode.classList.remove('is-cracked');
            const sNode = document.getElementById('shelah-node');
            if (sNode) sNode.classList.remove('is-cracked');
        }

        if (targetId === 'joktan-children') {
            collapseDescendants('reu-node');
            hideElement('reu-node');
            hideElement('reu-connector');
            const pNode = document.getElementById('peleg-node');
            if (pNode) pNode.classList.remove('is-cracked');
        }

        if (targetId === 'reu-node') {
            collapseDescendants('joktan-children');
            hideElement('joktan-children');
            hideElement('joktan-connector');
            const jNode = document.getElementById('joktan-node');
            if (jNode) jNode.classList.remove('is-cracked');
        }

        if (targetId === 'abraham-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'enoch-theme', 'methuselah-theme', 'noah-theme');
            document.body.classList.add('abraham-theme');

            collapseDescendants('nahor-children');
            hideElement('nahor-children');
            hideElement('nahor-connector');
            const nNode = document.getElementById('nahor-node');
            if (nNode) nNode.classList.remove('is-cracked');

            collapseDescendants('haran-children');
            hideElement('haran-children');
            hideElement('haran-connector');
            const hNode = document.getElementById('haran-node');
            if (hNode) hNode.classList.remove('is-cracked');
        }

        if (targetId === 'nahor-children') {
            document.body.classList.remove('abraham-theme');
            collapseDescendants('abraham-children');
            hideElement('abraham-children');
            hideElement('abraham-connector');
            const abNode = document.getElementById('abraham-node');
            if (abNode) abNode.classList.remove('is-cracked');

            collapseDescendants('haran-children');
            hideElement('haran-children');
            hideElement('haran-connector');
            const hNode = document.getElementById('haran-node');
            if (hNode) hNode.classList.remove('is-cracked');
        }

        if (targetId === 'haran-children') {
            document.body.classList.remove('abraham-theme');
            collapseDescendants('abraham-children');
            hideElement('abraham-children');
            hideElement('abraham-connector');
            const abNode = document.getElementById('abraham-node');
            if (abNode) abNode.classList.remove('is-cracked');

            collapseDescendants('nahor-children');
            hideElement('nahor-children');
            hideElement('nahor-connector');
            const nNode = document.getElementById('nahor-node');
            if (nNode) nNode.classList.remove('is-cracked');
        }

        if (targetId === 'laban-children') {
            collapseDescendants('rebekah-children');
            hideElement('rebekah-children');
            hideElement('rebekah-connector');
            const rebNode = document.getElementById('rebekah-node');
            if (rebNode) rebNode.classList.remove('is-cracked');
        }

        if (targetId === 'rebekah-children') {
            collapseDescendants('laban-children');
            hideElement('laban-children');
            hideElement('laban-connector');
            const labNode = document.getElementById('laban-node');
            if (labNode) labNode.classList.remove('is-cracked');
        }

        if (targetId === 'eliphaz-children') {
            collapseDescendants('reuel-children');
            hideElement('reuel-children');
            hideElement('reuel-connector');
            const rNode = document.getElementById('reuel-node');
            if (rNode) rNode.classList.remove('is-cracked');
        }

        if (targetId === 'reuel-children') {
            collapseDescendants('eliphaz-children');
            hideElement('eliphaz-children');
            hideElement('eliphaz-connector');
            const eNode = document.getElementById('eliphaz-node');
            if (eNode) eNode.classList.remove('is-cracked');
        }

        if (targetId === 'esau-children') {
            collapseDescendants('jacob-children');
            hideElement('jacob-children');
            hideElement('jacob-connector');
            const jNode = document.getElementById('jacob-node');
            if (jNode) jNode.classList.remove('is-cracked');
        }

        if (targetId === 'jacob-children') {
            collapseDescendants('esau-children');
            hideElement('esau-children');
            hideElement('esau-connector');
            const eNode = document.getElementById('esau-node');
            if (eNode) eNode.classList.remove('is-cracked');
        }

        if (targetId === 'reuben-children') {
            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');
        }

        if (targetId === 'simeon-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');
        }

        if (targetId === 'levi-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');
        }

        if (targetId === 'joseph-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');
        }

        if (targetId === 'dan-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('naphtali-children');
            hideElement('naphtali-children');
            hideElement('naphtali-connector');
            const napNode = document.getElementById('naphtali-node');
            if (napNode) napNode.classList.remove('is-cracked');
        }

        if (targetId === 'naphtali-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');

            collapseDescendants('gad-children');
            hideElement('gad-children');
            hideElement('gad-connector');
            const gadNode = document.getElementById('gad-node');
            if (gadNode) gadNode.classList.remove('is-cracked');
        }

        if (targetId === 'gad-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');

            collapseDescendants('naphtali-children');
            hideElement('naphtali-children');
            hideElement('naphtali-connector');
            const napNode = document.getElementById('naphtali-node');
            if (napNode) napNode.classList.remove('is-cracked');

            collapseDescendants('asher-children');
            hideElement('asher-children');
            hideElement('asher-connector');
            const ashNode = document.getElementById('asher-node');
            if (ashNode) ashNode.classList.remove('is-cracked');
        }

        if (targetId === 'asher-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');

            collapseDescendants('naphtali-children');
            hideElement('naphtali-children');
            hideElement('naphtali-connector');
            const napNode = document.getElementById('naphtali-node');
            if (napNode) napNode.classList.remove('is-cracked');

            collapseDescendants('gad-children');
            hideElement('gad-children');
            hideElement('gad-connector');
            const gadNode = document.getElementById('gad-node');
            if (gadNode) gadNode.classList.remove('is-cracked');

            collapseDescendants('issachar-children');
            hideElement('issachar-children');
            hideElement('issachar-connector');
            const issNode = document.getElementById('issachar-node');
            if (issNode) issNode.classList.remove('is-cracked');
        }

        if (targetId === 'issachar-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');

            collapseDescendants('naphtali-children');
            hideElement('naphtali-children');
            hideElement('naphtali-connector');
            const napNode = document.getElementById('naphtali-node');
            if (napNode) napNode.classList.remove('is-cracked');

            collapseDescendants('gad-children');
            hideElement('gad-children');
            hideElement('gad-connector');
            const gadNode = document.getElementById('gad-node');
            if (gadNode) gadNode.classList.remove('is-cracked');

            collapseDescendants('asher-children');
            hideElement('asher-children');
            hideElement('asher-connector');
            const ashNode = document.getElementById('asher-node');
            if (ashNode) ashNode.classList.remove('is-cracked');

            collapseDescendants('zebulun-children');
            hideElement('zebulun-children');
            hideElement('zebulun-connector');
            const zebNode = document.getElementById('zebulun-node');
            if (zebNode) zebNode.classList.remove('is-cracked');
        }

        if (targetId === 'zebulun-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');

            collapseDescendants('naphtali-children');
            hideElement('naphtali-children');
            hideElement('naphtali-connector');
            const napNode = document.getElementById('naphtali-node');
            if (napNode) napNode.classList.remove('is-cracked');

            collapseDescendants('gad-children');
            hideElement('gad-children');
            hideElement('gad-connector');
            const gadNode = document.getElementById('gad-node');
            if (gadNode) gadNode.classList.remove('is-cracked');

            collapseDescendants('asher-children');
            hideElement('asher-children');
            hideElement('asher-connector');
            const ashNode = document.getElementById('asher-node');
            if (ashNode) ashNode.classList.remove('is-cracked');

            collapseDescendants('issachar-children');
            hideElement('issachar-children');
            hideElement('issachar-connector');
            const issNode = document.getElementById('issachar-node');
            if (issNode) issNode.classList.remove('is-cracked');

            collapseDescendants('benjamin-children');
            hideElement('benjamin-children');
            hideElement('benjamin-connector');
            const benNode = document.getElementById('benjamin-node');
            if (benNode) benNode.classList.remove('is-cracked');
        }

        if (targetId === 'benjamin-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');

            collapseDescendants('naphtali-children');
            hideElement('naphtali-children');
            hideElement('naphtali-connector');
            const napNode = document.getElementById('naphtali-node');
            if (napNode) napNode.classList.remove('is-cracked');

            collapseDescendants('gad-children');
            hideElement('gad-children');
            hideElement('gad-connector');
            const gadNode = document.getElementById('gad-node');
            if (gadNode) gadNode.classList.remove('is-cracked');

            collapseDescendants('asher-children');
            hideElement('asher-children');
            hideElement('asher-connector');
            const ashNode = document.getElementById('asher-node');
            if (ashNode) ashNode.classList.remove('is-cracked');

            collapseDescendants('issachar-children');
            hideElement('issachar-children');
            hideElement('issachar-connector');
            const issNode = document.getElementById('issachar-node');
            if (issNode) issNode.classList.remove('is-cracked');

            collapseDescendants('zebulun-children');
            hideElement('zebulun-children');
            hideElement('zebulun-connector');
            const zebNode = document.getElementById('zebulun-node');
            if (zebNode) zebNode.classList.remove('is-cracked');

            collapseDescendants('judah-children');
            hideElement('judah-children');
            hideElement('judah-connector');
            const judNode = document.getElementById('judah-node');
            if (judNode) judNode.classList.remove('is-cracked');
        }

        if (targetId === 'judah-children') {
            collapseDescendants('reuben-children');
            hideElement('reuben-children');
            hideElement('reuben-connector');
            const reuNode = document.getElementById('reuben-node');
            if (reuNode) reuNode.classList.remove('is-cracked');

            collapseDescendants('simeon-children');
            hideElement('simeon-children');
            hideElement('simeon-connector');
            const simNode = document.getElementById('simeon-node');
            if (simNode) simNode.classList.remove('is-cracked');

            collapseDescendants('levi-children');
            hideElement('levi-children');
            hideElement('levi-connector');
            const levNode = document.getElementById('levi-node');
            if (levNode) levNode.classList.remove('is-cracked');

            collapseDescendants('joseph-children');
            hideElement('joseph-children');
            hideElement('joseph-connector');
            const josNode = document.getElementById('joseph-node');
            if (josNode) josNode.classList.remove('is-cracked');

            collapseDescendants('dan-children');
            hideElement('dan-children');
            hideElement('dan-connector');
            const danNode = document.getElementById('dan-node');
            if (danNode) danNode.classList.remove('is-cracked');

            collapseDescendants('naphtali-children');
            hideElement('naphtali-children');
            hideElement('naphtali-connector');
            const napNode = document.getElementById('naphtali-node');
            if (napNode) napNode.classList.remove('is-cracked');

            collapseDescendants('gad-children');
            hideElement('gad-children');
            hideElement('gad-connector');
            const gadNode = document.getElementById('gad-node');
            if (gadNode) gadNode.classList.remove('is-cracked');

            collapseDescendants('asher-children');
            hideElement('asher-children');
            hideElement('asher-connector');
            const ashNode = document.getElementById('asher-node');
            if (ashNode) ashNode.classList.remove('is-cracked');

            collapseDescendants('issachar-children');
            hideElement('issachar-children');
            hideElement('issachar-connector');
            const issNode = document.getElementById('issachar-node');
            if (issNode) issNode.classList.remove('is-cracked');

            collapseDescendants('zebulun-children');
            hideElement('zebulun-children');
            hideElement('zebulun-connector');
            const zebNode = document.getElementById('zebulun-node');
            if (zebNode) zebNode.classList.remove('is-cracked');

            collapseDescendants('benjamin-children');
            hideElement('benjamin-children');
            hideElement('benjamin-connector');
            const benNode = document.getElementById('benjamin-node');
            if (benNode) benNode.classList.remove('is-cracked');
        }

        if (targetId === 'gershon-children') {
            collapseDescendants('kohath-children');
            hideElement('kohath-children');
            hideElement('kohath-connector');
            const kohNode = document.getElementById('kohath-node');
            if (kohNode) kohNode.classList.remove('is-cracked');

            collapseDescendants('merari-children');
            hideElement('merari-children');
            hideElement('merari-connector');
            const merNode = document.getElementById('merari-node');
            if (merNode) merNode.classList.remove('is-cracked');
        }

        if (targetId === 'kohath-children') {
            collapseDescendants('gershon-children');
            hideElement('gershon-children');
            hideElement('gershon-connector');
            const gerNode = document.getElementById('gershon-node');
            if (gerNode) gerNode.classList.remove('is-cracked');

            collapseDescendants('merari-children');
            hideElement('merari-children');
            hideElement('merari-connector');
            const merNode = document.getElementById('merari-node');
            if (merNode) merNode.classList.remove('is-cracked');
        }

        if (targetId === 'merari-children') {
            collapseDescendants('gershon-children');
            hideElement('gershon-children');
            hideElement('gershon-connector');
            const gerNode = document.getElementById('gershon-node');
            if (gerNode) gerNode.classList.remove('is-cracked');

            collapseDescendants('kohath-children');
            hideElement('kohath-children');
            hideElement('kohath-connector');
            const kohNode = document.getElementById('kohath-node');
            if (kohNode) kohNode.classList.remove('is-cracked');
        }

        if (targetId === 'mahli-children') {
            collapseDescendants('mushi-children');
            hideElement('mushi-children');
            hideElement('mushi-connector');
            const musNode = document.getElementById('mushi-node');
            if (musNode) musNode.classList.remove('is-cracked');
        }

        if (targetId === 'mushi-children') {
            collapseDescendants('mahli-children');
            hideElement('mahli-children');
            hideElement('mahli-connector');
            const mahNode = document.getElementById('mahli-node');
            if (mahNode) mahNode.classList.remove('is-cracked');
        }

        if (targetId === 'amram-children') {
            collapseDescendants('izhar-children');
            hideElement('izhar-children');
            hideElement('izhar-connector');
            const izhNode = document.getElementById('izhar-node');
            if (izhNode) izhNode.classList.remove('is-cracked');

            collapseDescendants('hebron-children');
            hideElement('hebron-children');
            hideElement('hebron-connector');
            const hebNode = document.getElementById('hebron-node');
            if (hebNode) hebNode.classList.remove('is-cracked');

            collapseDescendants('uzziel-children');
            hideElement('uzziel-children');
            hideElement('uzziel-connector');
            const uzzNode = document.getElementById('uzziel-node');
            if (uzzNode) uzzNode.classList.remove('is-cracked');
        }

        if (targetId === 'izhar-children') {
            collapseDescendants('amram-children');
            hideElement('amram-children');
            hideElement('amram-connector');
            const amrNode = document.getElementById('amram-node');
            if (amrNode) amrNode.classList.remove('is-cracked');

            collapseDescendants('hebron-children');
            hideElement('hebron-children');
            hideElement('hebron-connector');
            const hebNode = document.getElementById('hebron-node');
            if (hebNode) hebNode.classList.remove('is-cracked');

            collapseDescendants('uzziel-children');
            hideElement('uzziel-children');
            hideElement('uzziel-connector');
            const uzzNode = document.getElementById('uzziel-node');
            if (uzzNode) uzzNode.classList.remove('is-cracked');
        }

        if (targetId === 'hebron-children') {
            collapseDescendants('amram-children');
            hideElement('amram-children');
            hideElement('amram-connector');
            const amrNode = document.getElementById('amram-node');
            if (amrNode) amrNode.classList.remove('is-cracked');

            collapseDescendants('izhar-children');
            hideElement('izhar-children');
            hideElement('izhar-connector');
            const izhNode = document.getElementById('izhar-node');
            if (izhNode) izhNode.classList.remove('is-cracked');

            collapseDescendants('uzziel-children');
            hideElement('uzziel-children');
            hideElement('uzziel-connector');
            const uzzNode = document.getElementById('uzziel-node');
            if (uzzNode) uzzNode.classList.remove('is-cracked');
        }

        if (targetId === 'uzziel-children') {
            collapseDescendants('amram-children');
            hideElement('amram-children');
            hideElement('amram-connector');
            const amrNode = document.getElementById('amram-node');
            if (amrNode) amrNode.classList.remove('is-cracked');

            collapseDescendants('izhar-children');
            hideElement('izhar-children');
            hideElement('izhar-connector');
            const izhNode = document.getElementById('izhar-node');
            if (izhNode) izhNode.classList.remove('is-cracked');

            collapseDescendants('hebron-children');
            hideElement('hebron-children');
            hideElement('hebron-connector');
            const hebNode = document.getElementById('hebron-node');
            if (hebNode) hebNode.classList.remove('is-cracked');
        }

        if (targetId === 'aaron-children') {
            collapseDescendants('moses-children');
            hideElement('moses-children');
            hideElement('moses-connector');
            const mosNode = document.getElementById('moses-node');
            if (mosNode) mosNode.classList.remove('is-cracked');
        }

        if (targetId === 'moses-children') {
            collapseDescendants('aaron-children');
            hideElement('aaron-children');
            hideElement('aaron-connector');
            const aarNode = document.getElementById('aaron-node');
            if (aarNode) aarNode.classList.remove('is-cracked');
        }

        if (targetId === 'gershom-moses-children') {
            collapseDescendants('eliezer-children');
            hideElement('eliezer-children');
            hideElement('eliezer-connector');
            const eliNode = document.getElementById('eliezer-node');
            if (eliNode) eliNode.classList.remove('is-cracked');
        }

        if (targetId === 'eliezer-children') {
            collapseDescendants('gershom-moses-children');
            hideElement('gershom-moses-children');
            hideElement('gershom-moses-connector');
            const gerNode = document.getElementById('gershom-moses-node');
            if (gerNode) gerNode.classList.remove('is-cracked');
        }

        if (targetId === 'isaac-children') {
            collapseDescendants('ishmael-children');
            hideElement('ishmael-children');
            hideElement('ishmael-connector');
            const ishNode = document.getElementById('ishmael-node');
            if (ishNode) ishNode.classList.remove('is-cracked');

            collapseDescendants('jokshan-children');
            hideElement('jokshan-children');
            hideElement('jokshan-connector');
            const jokNode = document.getElementById('jokshan-node');
            if (jokNode) jokNode.classList.remove('is-cracked');

            collapseDescendants('midian-children');
            hideElement('midian-children');
            hideElement('midian-connector');
            const midNode = document.getElementById('midian-node');
            if (midNode) midNode.classList.remove('is-cracked');
        }

        if (targetId === 'ishmael-children') {
            collapseDescendants('isaac-children');
            hideElement('isaac-children');
            hideElement('isaac-connector');
            const isNode = document.getElementById('isaac-node');
            if (isNode) isNode.classList.remove('is-cracked');

            collapseDescendants('jokshan-children');
            hideElement('jokshan-children');
            hideElement('jokshan-connector');
            const jokNode = document.getElementById('jokshan-node');
            if (jokNode) jokNode.classList.remove('is-cracked');

            collapseDescendants('midian-children');
            hideElement('midian-children');
            hideElement('midian-connector');
            const midNode = document.getElementById('midian-node');
            if (midNode) midNode.classList.remove('is-cracked');
        }

        if (targetId === 'jokshan-children') {
            collapseDescendants('isaac-children');
            hideElement('isaac-children');
            hideElement('isaac-connector');
            const isNode = document.getElementById('isaac-node');
            if (isNode) isNode.classList.remove('is-cracked');

            collapseDescendants('ishmael-children');
            hideElement('ishmael-children');
            hideElement('ishmael-connector');
            const ishNode = document.getElementById('ishmael-node');
            if (ishNode) ishNode.classList.remove('is-cracked');

            collapseDescendants('midian-children');
            hideElement('midian-children');
            hideElement('midian-connector');
            const midNode = document.getElementById('midian-node');
            if (midNode) midNode.classList.remove('is-cracked');
        }

        if (targetId === 'midian-children') {
            collapseDescendants('isaac-children');
            hideElement('isaac-children');
            hideElement('isaac-connector');
            const isNode = document.getElementById('isaac-node');
            if (isNode) isNode.classList.remove('is-cracked');

            collapseDescendants('ishmael-children');
            hideElement('ishmael-children');
            hideElement('ishmael-connector');
            const ishNode = document.getElementById('ishmael-node');
            if (ishNode) ishNode.classList.remove('is-cracked');

            collapseDescendants('jokshan-children');
            hideElement('jokshan-children');
            hideElement('jokshan-connector');
            const jokNode = document.getElementById('jokshan-node');
            if (jokNode) jokNode.classList.remove('is-cracked');
        }

        targetElement.classList.remove('hidden');
        targetElement.classList.remove('collapsing');
        if (connectorMap[targetId]) {
            showElement(connectorMap[targetId]);
        }

        targetElement.querySelectorAll(':scope > .column > .node:first-child').forEach(function(n) {
            n.classList.remove('hidden');
            n.classList.remove('collapsing');
        });

        if (parentNode) {
            parentNode.classList.add('is-cracked');
        }

        scrollToNode(targetId);

    } else {
        hideElement(targetId);
        if (connectorMap[targetId]) {
            hideElement(connectorMap[targetId]);
        }
        collapseDescendants(targetId);

        if (parentNode) {
            parentNode.classList.remove('is-cracked');
        }

        if (targetId === 'abraham-children' || targetId === 'abraham-node') {
            document.body.classList.remove('abraham-theme');
            document.body.classList.add('noah-theme');
        }
        if (targetId === 'noah-children' || targetId === 'noah-node') {
            document.body.classList.remove('noah-theme', 'abraham-theme');
            document.body.classList.add('methuselah-theme');
        }
        if (targetId === 'seth-lamech-node') {
            document.body.classList.remove('methuselah-theme', 'noah-theme', 'abraham-theme');
            document.body.classList.add('enoch-theme');
        }
        if (targetId === 'methuselah-node' || targetId === 'seth-enoch-node' || targetId === 'jared-node' || targetId === 'mahalalel-node' || targetId === 'kenan-node') {
            document.body.classList.remove('enoch-theme', 'methuselah-theme', 'noah-theme', 'abraham-theme');
            document.body.classList.add('seth-theme');
        }
        if (targetId === 'cain-enoch-node' || targetId === 'lamech-children') {
            document.body.classList.remove('cain-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.remove('cain-open');
        }
        if (targetId === 'enosh-node') {
            document.body.classList.remove('seth-theme', 'enoch-theme', 'methuselah-theme', 'noah-theme', 'abraham-theme');
        }
        if (targetId === 'gen2-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'enoch-theme', 'noah-theme', 'methuselah-theme', 'abraham-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.remove('cain-open');
        }

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
    document.body.appendChild(panel);
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

function toggleShelahInfo(event) {
    const panel = document.getElementById('shelah-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('shelah-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleEberInfo(event) {
    const panel = document.getElementById('eber-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('eber-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function togglePelegInfo(event) {
    const panel = document.getElementById('peleg-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('peleg-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleReuInfo(event) {
    const panel = document.getElementById('reu-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('reu-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleSerugInfo(event) {
    const panel = document.getElementById('serug-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('serug-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleNahorAncestorInfo(event) {
    const panel = document.getElementById('nahor-ancestor-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('nahor-ancestor-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleTerahInfo(event) {
    const panel = document.getElementById('terah-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('terah-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleAbrahamInfo(event) {
    const panel = document.getElementById('abraham-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('abraham-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleIshmaelInfo(event) {
    const panel = document.getElementById('ishmael-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('ishmael-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleJokshanInfo(event) {
    const panel = document.getElementById('jokshan-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('jokshan-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleDedanInfo(event) {
    const panel = document.getElementById('dedan-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('dedan-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleMidianInfo(event) {
    const panel = document.getElementById('midian-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('midian-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleIsaacInfo(event) {
    const panel = document.getElementById('isaac-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('isaac-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleBethuelInfo(event) {
    const panel = document.getElementById('bethuel-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('bethuel-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleLabanInfo(event) {
    const panel = document.getElementById('laban-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('laban-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleLeahInfo(event) {
    const panel = document.getElementById('leah-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('leah-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleRachelInfo(event) {
    const panel = document.getElementById('rachel-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('rachel-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleBilhahInfo(event) {
    const panel = document.getElementById('bilhah-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('bilhah-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleZilpahInfo(event) {
    const panel = document.getElementById('zilpah-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('zilpah-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleRebekahInfo(event) {
    const panel = document.getElementById('rebekah-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('rebekah-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleEsauInfo(event) {
    const panel = document.getElementById('esau-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('esau-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleJacobInfo(event) {
    const panel = document.getElementById('jacob-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('jacob-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleLotInfo(event) {
    const panel = document.getElementById('lot-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('lot-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleMoabInfo(event) {
    const panel = document.getElementById('moab-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('moab-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleBenAmmiInfo(event) {
    const panel = document.getElementById('benammi-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('benammi-detail-panel', event);
    } else {
        panel.classList.add('hidden');
    }
}

function toggleEnochInfo() {
    const panel = document.getElementById('enoch-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('enoch-detail-panel');
    } else {
        panel.classList.add('hidden');
    }
}

function closeEnochInfo() {
    const panel = document.getElementById('enoch-detail-panel');
    if (panel) panel.classList.add('hidden');
}

function toggleNoahInfo() {
    const panel = document.getElementById('noah-detail-panel');
    if (!panel) return;
    if (panel.classList.contains('hidden')) {
        showPanel('noah-detail-panel');
    } else {
        panel.classList.add('hidden');
    }
}

function closeNoahInfo() {
    const panel = document.getElementById('noah-detail-panel');
    if (panel) panel.classList.add('hidden');
}

window.addEventListener('click', (event) => {
    if (event.target.closest('.info-badge') || event.target.closest('.detail-panel')) return;
    closeAllPanels();
});

function scrollToNode(nodeId) {
    let target = nodeId;
    if (typeof nodeId === 'string' && nodeId.endsWith('-children')) {
        const candidate = nodeId.replace('-children', '-node');
        if (document.getElementById(candidate)) {
            target = candidate;
        }
    }
    if (nodeId === 'gen2-children') target = 'root';
    if (nodeId === 'noah-children') target = 'ham-node';
    if (nodeId === 'terah-children') target = 'nahor-node';

    const performScroll = () => {
        const element = document.getElementById(target) || document.getElementById(nodeId);
        if (!element) return;

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    };

    requestAnimationFrame(performScroll);
    setTimeout(performScroll, 200);
}

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
        lineageMap[parentId].forEach(childId => {
            hideElement(childId, true);
            const childContainer = document.getElementById(childId);
            if (childContainer) {
                childContainer.querySelectorAll('.branch').forEach(b => {
                    b.classList.add('hidden');
                    b.classList.remove('collapsing');
                });
                childContainer.querySelectorAll('.connector').forEach(c => {
                    c.classList.add('hidden');
                    c.classList.remove('collapsing');
                });
                childContainer.querySelectorAll('.node').forEach(n => {
                    n.classList.remove('is-cracked');
                });
            }
        });
    }
    const container = document.getElementById(parentId);
    if (container) {
        container.querySelectorAll('.branch').forEach(b => {
            b.classList.add('hidden');
            b.classList.remove('collapsing');
        });
        container.querySelectorAll('.connector').forEach(c => {
            c.classList.add('hidden');
            c.classList.remove('collapsing');
        });
        container.querySelectorAll('.node').forEach(n => {
            n.classList.remove('is-cracked');
        });
    }
}

// ============================================================
// PART 4 — BOOTSTRAP: fetch JSON & build tree
// ============================================================

(async function init() {
    try {
        const response = await fetch('genealogy.json');
        const data = await response.json();

        // Build node lookup map: id -> node object
        const map = {};
        data.forEach(node => { map[node.id] = node; });

        // Build main interactive tree into .tree-container
        buildTree(map, data);

    } catch (err) {
        console.error('Failed to load genealogy.json:', err);
        const container = document.querySelector('.tree-container');
        if (container) {
            container.innerHTML += '<p style="color:red;padding:2rem">Error loading genealogy data. Make sure genealogy.json is accessible.</p>';
        }
    }
})();