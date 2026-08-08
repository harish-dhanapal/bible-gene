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
        'shem-connector', 'shem-children', 'aram-connector', 'aram-children',
        'shelah-connector', 'shelah-node', 'eber-connector', 'eber-node',
        'eber-children-connector', 'eber-children', 'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children'
    ],
    'shem-children': [
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
        'dedan-connector', 'dedan-children', 'midian-connector', 'midian-children'
    ],
    'abraham-children': [
        'isaac-connector', 'isaac-children',
        'ishmael-connector', 'ishmael-children',
        'jokshan-connector', 'jokshan-children',
        'dedan-connector', 'dedan-children',
        'midian-connector', 'midian-children'
    ],
    'isaac-node': [
        'isaac-connector', 'isaac-children', 'esau-connector', 'esau-children', 'jacob-connector', 'jacob-children', 'joseph-connector', 'joseph-children'
    ],
    'isaac-children': [
        'esau-connector', 'esau-children', 'jacob-connector', 'jacob-children', 'joseph-connector', 'joseph-children'
    ],
    'jacob-node': [
        'jacob-connector', 'jacob-children', 'joseph-connector', 'joseph-children'
    ],
    'jacob-children': [
        'jacob-connector', 'jacob-children', 'joseph-connector', 'joseph-children'
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
    'gomer-node': [
        'gomer-connector', 'gomer-children'
    ],
    'javan-node': [
        'javan-connector', 'javan-children'
    ],
    'japheth-node': [
        'japheth-connector', 'japheth-children',
        'gomer-connector', 'gomer-children',
        'javan-connector', 'javan-children'
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
        'shem-connector', 'shem-children', 'aram-connector', 'aram-children',
        'shelah-connector', 'shelah-node', 'eber-connector', 'eber-node',
        'eber-children-connector', 'eber-children', 'joktan-connector', 'joktan-children',
        'reu-connector', 'reu-node', 'serug-connector', 'serug-node',
        'nahor-ancestor-connector', 'nahor-ancestor-node', 'terah-connector', 'terah-node',
        'terah-children-connector', 'terah-children', 'nahor-connector', 'nahor-children',
        'haran-connector', 'haran-children', 'abraham-connector', 'abraham-children',
        'ham-connector', 'ham-children', 
        'cush-connector', 'cush-children', 'raamah-connector', 'raamah-children',
        'mizraim-connector', 'mizraim-children', 'canaan-connector', 'canaan-children',
        'japheth-connector', 'japheth-children',
        'gomer-connector', 'gomer-children', 'javan-connector', 'javan-children'
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
    'joseph-node': 'jacob-children',
    'joseph-children': 'joseph-node',
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
    'japheth-children': 'japheth-node',
    'gomer-node': 'japheth-children',
    'gomer-children': 'gomer-node',
    'javan-node': 'japheth-children',
    'javan-children': 'javan-node'
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

    // 3. Clear Cain, Seth, Enoch, Noah, and Methuselah themes if active
    document.body.classList.remove('cain-theme', 'seth-theme', 'enoch-theme', 'noah-theme', 'methuselah-theme');
    
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
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'enoch-theme', 'methuselah-theme', 'noah-theme');
            const abelNode = document.getElementById('abel-node');
            if (abelNode) abelNode.classList.remove('is-cracked');
        }

        // Auto-collapse Cain's tree & switch to Seth theme if opening Seth's branch (Enosh, Kenan, Mahalalel, Jared)
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

        // Auto-collapse Seth's tree & switch to Cain theme if opening Cain's branch
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

        // Enoch clicked -> Apply Enoch theme (images/enoch.png)
        if (targetId === 'methuselah-node') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'noah-theme', 'methuselah-theme');
            document.body.classList.add('enoch-theme');
        }

        // Methuselah clicked -> Apply Methuselah theme (images/methuselah.jpg)
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

        // Auto-collapse Javan if opening Gomer's branch
        if (targetId === 'gomer-children') {
            collapseDescendants('javan-children');
            hideElement('javan-children');
            hideElement('javan-connector');
            const jNode = document.getElementById('javan-node');
            if (jNode) jNode.classList.remove('is-cracked');
        }

        // Auto-collapse Gomer if opening Javan's branch
        if (targetId === 'javan-children') {
            collapseDescendants('gomer-children');
            hideElement('gomer-children');
            hideElement('gomer-connector');
            const gNode = document.getElementById('gomer-node');
            if (gNode) gNode.classList.remove('is-cracked');
        }

        // --- SHEM'S LINEAGE MUTUAL SIBLING AUTO-COLLAPSE ---

        // Auto-collapse Aram if opening Arphaxad/Shelah's branch
        if (targetId === 'shelah-node') {
            collapseDescendants('aram-children');
            hideElement('aram-children');
            hideElement('aram-connector');
            const aNode = document.getElementById('aram-node');
            if (aNode) aNode.classList.remove('is-cracked');
        }

        // Auto-collapse Arphaxad/Shelah & downstream if opening Aram's branch
        if (targetId === 'aram-children') {
            collapseDescendants('shelah-node');
            hideElement('shelah-node');
            hideElement('shelah-connector');
            const sNode = document.getElementById('shelah-node');
            if (sNode) sNode.classList.remove('is-cracked');
        }

        // Auto-collapse Peleg (reu-node) if opening Joktan's branch
        if (targetId === 'joktan-children') {
            collapseDescendants('reu-node');
            hideElement('reu-node');
            hideElement('reu-connector');
            const pNode = document.getElementById('peleg-node');
            if (pNode) pNode.classList.remove('is-cracked');
        }

        // Auto-collapse Joktan's branch if opening Peleg's branch (reu-node)
        if (targetId === 'reu-node') {
            collapseDescendants('joktan-children');
            hideElement('joktan-children');
            hideElement('joktan-connector');
            const jNode = document.getElementById('joktan-node');
            if (jNode) jNode.classList.remove('is-cracked');
        }

        // Auto-collapse Nahor & Haran if opening Abraham's branch
        if (targetId === 'abraham-children') {
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

        // Auto-collapse Abraham & Haran if opening Nahor's branch
        if (targetId === 'nahor-children') {
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

        // Auto-collapse Abraham & Nahor if opening Haran's branch
        if (targetId === 'haran-children') {
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

        // Auto-collapse Rebekah if opening Laban's branch
        if (targetId === 'laban-children') {
            collapseDescendants('rebekah-children');
            hideElement('rebekah-children');
            hideElement('rebekah-connector');
            const rebNode = document.getElementById('rebekah-node');
            if (rebNode) rebNode.classList.remove('is-cracked');
        }

        // Auto-collapse Laban if opening Rebekah's branch
        if (targetId === 'rebekah-children') {
            collapseDescendants('laban-children');
            hideElement('laban-children');
            hideElement('laban-connector');
            const labNode = document.getElementById('laban-node');
            if (labNode) labNode.classList.remove('is-cracked');
        }

        // Auto-collapse Reuel if opening Eliphaz's branch
        if (targetId === 'eliphaz-children') {
            collapseDescendants('reuel-children');
            hideElement('reuel-children');
            hideElement('reuel-connector');
            const rNode = document.getElementById('reuel-node');
            if (rNode) rNode.classList.remove('is-cracked');
        }

        // Auto-collapse Eliphaz if opening Reuel's branch
        if (targetId === 'reuel-children') {
            collapseDescendants('eliphaz-children');
            hideElement('eliphaz-children');
            hideElement('eliphaz-connector');
            const eNode = document.getElementById('eliphaz-node');
            if (eNode) eNode.classList.remove('is-cracked');
        }

        // --- ABRAHAM'S SONS MUTUAL SIBLING AUTO-COLLAPSE ---

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

        // Step-by-step reverse theme restoration when collapsing up the tree
        if (targetId === 'noah-children' || targetId === 'noah-node') {
            document.body.classList.remove('noah-theme');
            document.body.classList.add('methuselah-theme');
        }
        if (targetId === 'seth-lamech-node') {
            document.body.classList.remove('methuselah-theme', 'noah-theme');
            document.body.classList.add('enoch-theme');
        }
        if (targetId === 'methuselah-node' || targetId === 'seth-enoch-node' || targetId === 'jared-node' || targetId === 'mahalalel-node' || targetId === 'kenan-node') {
            document.body.classList.remove('enoch-theme', 'methuselah-theme', 'noah-theme');
            document.body.classList.add('seth-theme');
        }
        if (targetId === 'cain-enoch-node' || targetId === 'lamech-children') {
            document.body.classList.remove('cain-theme');
            const treeContainer = document.querySelector('.tree-container');
            if (treeContainer) treeContainer.classList.remove('cain-open');
        }
        if (targetId === 'enosh-node') {
            document.body.classList.remove('seth-theme', 'enoch-theme', 'methuselah-theme', 'noah-theme');
        }
        if (targetId === 'gen2-children') {
            document.body.classList.remove('cain-theme', 'seth-theme', 'abel-theme', 'enoch-theme', 'noah-theme', 'methuselah-theme');
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

    // Ensure detail panel is attached to top-level body for fixed top-right screen display
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

// Close panels when the user clicks anywhere outside them
window.addEventListener('click', (event) => {
    if (event.target.closest('.info-badge') || event.target.closest('.detail-panel')) return;
    closeAllPanels();
});

// Smooth scroll centering helper for Viewport Auto-Pan
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
    if (nodeId === 'jacob-children') target = 'joseph-node';

    const performScroll = () => {
        const element = document.getElementById(target) || document.getElementById(nodeId);
        if (!element) return;

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    };

    // Immediate initial scroll pulse
    requestAnimationFrame(performScroll);

    // Second scroll pulse after CSS branch collapse/expand animations finish (180ms)
    setTimeout(performScroll, 200);
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