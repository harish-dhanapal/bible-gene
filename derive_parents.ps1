$json = Get-Content 'genealogy.json' -Raw | ConvertFrom-Json

# Hash table mapping node id -> parent id
$parents = [ordered]@{}

# Root has null parent
$parents['root'] = $null

# Cain line
$parents['cain'] = 'root'
$parents['cain-enoch'] = 'cain'
$parents['irad'] = 'cain-enoch'
$parents['mehujael'] = 'irad'
$parents['methushael'] = 'mehujael'
$parents['lamech'] = 'methushael'
$parents['jabal'] = 'lamech'
$parents['jubal'] = 'lamech'
$parents['tubal-cain'] = 'lamech'
$parents['naamah'] = 'lamech'

# Abel
$parents['abel'] = 'root'

# Seth line
$parents['seth'] = 'root'
$parents['enosh'] = 'seth'
$parents['kenan'] = 'enosh'
$parents['mahalalel'] = 'kenan'
$parents['jared'] = 'mahalalel'
$parents['seth-enoch'] = 'jared'
$parents['methuselah'] = 'seth-enoch'
$parents['seth-lamech'] = 'methuselah'
$parents['noah'] = 'seth-lamech'

# Noah's sons
$parents['shem'] = 'noah'
$parents['ham'] = 'noah'
$parents['japheth'] = 'noah'

# Shem line
$parents['elam'] = 'shem'
$parents['asshur'] = 'shem'
$parents['arphaxad'] = 'shem'
$parents['shelah'] = 'arphaxad'
$parents['eber'] = 'shelah'
$parents['peleg'] = 'eber'
$parents['joktan'] = 'eber'

# Peleg line
$parents['reu'] = 'peleg'
$parents['serug'] = 'reu'
$parents['nahor-ancestor'] = 'serug'
$parents['terah'] = 'nahor-ancestor'

# Terah sons
$parents['abraham'] = 'terah'
$parents['nahor'] = 'terah'
$parents['haran'] = 'terah'

# Abraham sons
$parents['isaac'] = 'abraham'
$parents['ishmael'] = 'abraham'
$parents['zimran'] = 'abraham'
$parents['medan'] = 'abraham'
$parents['ishbak'] = 'abraham'
$parents['shuah'] = 'abraham'
$parents['jokshan'] = 'abraham'
$parents['midian'] = 'abraham'

# Ishmael sons
@('nebaioth','kedar','adbeel','mibsam-2','mishma-2','dumah','massa','hadad-hadar','tema','jetur','naphish','kedemah') | ForEach-Object { $parents[$_] = 'ishmael' }

# Jokshan sons
$parents['sheba-jokshan'] = 'jokshan'
$parents['dedan'] = 'jokshan'
@('asshurim','letushim','leummim') | ForEach-Object { $parents[$_] = 'dedan' }

# Midian sons
@('ephah','epher','hanoch-midian','abida','eldaah') | ForEach-Object { $parents[$_] = 'midian' }

# Isaac sons
$parents['esau'] = 'isaac'
$parents['jacob'] = 'isaac'

# Esau sons
$parents['eliphaz'] = 'esau'
$parents['reuel'] = 'esau'
$parents['jeush'] = 'esau'
$parents['jalam'] = 'esau'
$parents['korah-2'] = 'esau'
@('teman','omar','zepho','gatam','kenaz','amalek') | ForEach-Object { $parents[$_] = 'eliphaz' }
@('nahath','zerah','shammah','mizzah') | ForEach-Object { $parents[$_] = 'reuel' }

# Jacob sons
$parents['reuben'] = 'jacob'
$parents['simeon'] = 'jacob'
$parents['levi'] = 'jacob'
$parents['judah'] = 'jacob'
$parents['dan'] = 'jacob'
$parents['naphtali'] = 'jacob'
$parents['gad'] = 'jacob'
$parents['asher'] = 'jacob'
$parents['issachar'] = 'jacob'
$parents['zebulun'] = 'jacob'
$parents['joseph'] = 'jacob'
$parents['benjamin'] = 'jacob'
$parents['dinah'] = 'jacob'

# Reuben sons
$parents['hanoch-reuben'] = 'reuben'
$parents['pallu'] = 'reuben'
$parents['hezron'] = 'reuben'
$parents['carmi'] = 'reuben'
$parents['eliab'] = 'pallu'
@('nemuel','dathan','abiram') | ForEach-Object { $parents[$_] = 'eliab' }

# Simeon sons
@('nemuel-jemuel','jamin','jarib-jachin','zerah-zohar','ohad','shaul') | ForEach-Object { $parents[$_] = 'simeon' }
$parents['shallum'] = 'shaul'
$parents['mibsam'] = 'shallum'
$parents['mishma'] = 'mibsam'
$parents['hammuel'] = 'mishma'
@('zaccur','shimei-hammuel') | ForEach-Object { $parents[$_] = 'hammuel' }

# Levi sons
$parents['gershon'] = 'levi'
$parents['kohath'] = 'levi'
$parents['merari'] = 'levi'

# Gershon line
$parents['shimei-gershon'] = 'gershon'
$parents['libni'] = 'gershon'
$parents['jahath'] = 'libni'
$parents['zimmah'] = 'jahath'
$parents['joah'] = 'zimmah'
$parents['iddo'] = 'joah'
$parents['zerah-levite'] = 'iddo'
$parents['jeatherai-ethni'] = 'zerah-levite'

# Kohath line
$parents['amram'] = 'kohath'
$parents['izhar'] = 'kohath'
$parents['hebron'] = 'kohath'
$parents['uzziel'] = 'kohath'
@('korah','nepheg','zichri') | ForEach-Object { $parents[$_] = 'izhar' }

# Amram sons
$parents['aaron'] = 'amram'
$parents['moses'] = 'amram'
$parents['miriam'] = 'amram'
@('nadab','abihu','eleazar','ithamar') | ForEach-Object { $parents[$_] = 'aaron' }
$parents['gershom-moses'] = 'moses'
$parents['shubael'] = 'gershom-moses'
$parents['eliezer'] = 'moses'
$parents['rehabiah'] = 'eliezer'

# Merari sons
@('mahli','mushi') | ForEach-Object { $parents[$_] = 'merari' }

# Joseph sons
@('manasseh','ephraim') | ForEach-Object { $parents[$_] = 'joseph' }

# Nahor sons & descendants
@('uz-nahor','buz','kemuel','chesed','hazo','pildash','jidlaph','tebah','gaham','tahash','maacah','bethuel') | ForEach-Object { $parents[$_] = 'nahor' }
$parents['laban'] = 'bethuel'
$parents['rebekah'] = 'bethuel'
@('leah','rachel','bilhah','zilpah') | ForEach-Object { $parents[$_] = 'laban' }

# Haran sons & descendants
$parents['lot'] = 'haran'
$parents['milcah'] = 'haran'
$parents['iscah'] = 'haran'
@('daughter-unnamed-lot','daughter-unnamed-lot-2','moab','ben-ammi') | ForEach-Object { $parents[$_] = 'lot' }

# Joktan sons
@('almodad','sheleph','hazarmaveth','jerah','hadoram','uzal','diklah','obal-ebal','abimael','sheba-joktan','ophir','havilah-joktan','jobab') | ForEach-Object { $parents[$_] = 'joktan' }

# Aram sons
$parents['lud'] = 'shem'
$parents['aram'] = 'shem'
@('uz-aram','hul','gether','mash-meshech') | ForEach-Object { $parents[$_] = 'aram' }

# Ham line
$parents['cush'] = 'ham'
$parents['mizraim'] = 'ham'
$parents['put'] = 'ham'
$parents['canaan'] = 'ham'

# Cush sons
@('seba','havilah-cush','sabtah','sabteca','nimrod','raamah') | ForEach-Object { $parents[$_] = 'cush' }
@('sheba-raamah','dedan-2') | ForEach-Object { $parents[$_] = 'raamah' }

# Mizraim sons
@('ludim','anamim','lehabim','naphtuhim','pathrusim','casluhim','caphtorim') | ForEach-Object { $parents[$_] = 'mizraim' }

# Canaan sons
@('sidon','heth','jebusites','amorites','girgashites','hivites','arkites','sinites','arvadites','zemarites','hamathites') | ForEach-Object { $parents[$_] = 'canaan' }

# Japheth line
@('gomer','magog','madai','javan','tubal','meshech','tiras') | ForEach-Object { $parents[$_] = 'japheth' }
@('ashkenaz','riphath-diphath','togarmah') | ForEach-Object { $parents[$_] = 'gomer' }
@('elishah','tarshish','kittim','dodanim-rodanim') | ForEach-Object { $parents[$_] = 'javan' }

# Compute generation iteratively
$generations = @{}
$generations['root'] = 1

$unresolved = $true
while ($unresolved) {
    $unresolved = $false
    foreach ($node in $json) {
        $id = $node.id
        if (-not $generations.ContainsKey($id)) {
            $par = $parents[$id]
            if ($par -and $generations.ContainsKey($par)) {
                $generations[$id] = $generations[$par] + 1
            } else {
                $unresolved = $true
            }
        }
    }
}

# Update json objects
foreach ($node in $json) {
    $id = $node.id
    $node.parentId = $parents[$id]
    $node.generation = $generations[$id]
}

# Save updated json back to genealogy.json
$updatedJson = $json | ConvertTo-Json -Depth 10
Set-Content -Path 'genealogy.json' -Value $updatedJson -Encoding UTF8

# Validation checks
$totalPeople = $json.Count
$nullParentCount = ($json | Where-Object { $null -eq $_.parentId }).Count
$allIds = $json.id
$invalidParents = $json | Where-Object { $_.parentId -and $_.parentId -notin $allIds }
$invalidGenPairs = $json | Where-Object { 
    if ($_.parentId) {
        $pGen = $generations[$_.parentId]
        $_.generation -ne ($pGen + 1)
    } else {
        $false
    }
}

Write-Host "--- VALIDATION REPORT ---"
Write-Host "Total people:" $totalPeople "(Expected: 239)"
Write-Host "Count of parentId: null:" $nullParentCount "(Expected: 1)"
Write-Host "Invalid parent IDs count:" $invalidParents.Count "(Expected: 0)"
Write-Host "Invalid generation pairs count:" $invalidGenPairs.Count "(Expected: 0)"
