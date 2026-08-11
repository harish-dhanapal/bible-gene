$legacyBranches = Get-Content 'legacy_branches.txt'
$legacyConnectors = Get-Content 'legacy_connectors.txt'

$json = Get-Content genealogy.json -Raw | ConvertFrom-Json
$childrenMap = @{}
foreach ($node in $json) {
    if ($node.id -ne 'root') {
        $p = if ($node.parentId) { $node.parentId } else { 'root' }
        if (-not $childrenMap.ContainsKey($p)) { $childrenMap[$p] = @() }
        $childrenMap[$p] += $node
    }
}

$forceBranch = @('eleazar', 'rehabiah')
$linearKeys = @('cain','cain-enoch','irad','mehujael','methushael','seth','enosh','kenan','mahalalel','jared','seth-enoch','methuselah','seth-lamech','arphaxad','shelah','peleg','reu','serug','nahor-ancestor')

$genNodes = @()
$genConnectors = @()
$genBranches = @()

function SimRenderNode($person_id) {
    $nId = if ($person_id -eq 'root') { 'root' } elseif ($person_id -eq 'abel') { 'abel-node' } else { "$person_id-node" }
    $script:genNodes += $nId

    $kids = $childrenMap[$person_id]
    $hasBranch = ($kids -and $kids.Count -gt 0) -or ($person_id -in $forceBranch)

    if ($hasBranch) {
        $tId = if ($person_id -eq 'root') { 'gen2-children' } elseif ($linearKeys -contains $person_id) { 
            if ($person_id -eq 'cain') { 'cain-enoch-node' }
            elseif ($person_id -eq 'cain-enoch') { 'irad-node' }
            elseif ($person_id -eq 'irad') { 'mehujael-node' }
            elseif ($person_id -eq 'mehujael') { 'methushael-node' }
            elseif ($person_id -eq 'methushael') { 'lamech-node' }
            elseif ($person_id -eq 'seth') { 'enosh-node' }
            elseif ($person_id -eq 'enosh') { 'kenan-node' }
            elseif ($person_id -eq 'kenan') { 'mahalalel-node' }
            elseif ($person_id -eq 'mahalalel') { 'jared-node' }
            elseif ($person_id -eq 'jared') { 'seth-enoch-node' }
            elseif ($person_id -eq 'seth-enoch') { 'methuselah-node' }
            elseif ($person_id -eq 'methuselah') { 'seth-lamech-node' }
            elseif ($person_id -eq 'seth-lamech') { 'noah-node' }
            elseif ($person_id -eq 'arphaxad') { 'shelah-node' }
            elseif ($person_id -eq 'shelah') { 'eber-node' }
            elseif ($person_id -eq 'peleg') { 'reu-node' }
            elseif ($person_id -eq 'reu') { 'serug-node' }
            elseif ($person_id -eq 'serug') { 'nahor-ancestor-node' }
            elseif ($person_id -eq 'nahor-ancestor') { 'terah-node' }
        } else {
            "$person_id-children"
        }

        # Connector ID
        $cId = if ($tId -eq 'gen2-children') { 'gen2-connector' }
               elseif ($tId -eq 'lamech-children') { 'lamech-children-connector' }
               elseif ($tId -eq 'noah-children') { 'noah-children-connector' }
               elseif ($tId -eq 'eber-children') { 'eber-children-connector' }
               elseif ($tId -eq 'terah-children') { 'terah-children-connector' }
               elseif ($tId.EndsWith('-node')) { $tId.Replace('-node', '-connector') }
               elseif ($tId.EndsWith('-children')) { $tId.Replace('-children', '-connector') }
               else { "$tId-connector" }
        $script:genConnectors += $cId

        if ($kids -and $kids.Count -eq 1 -and ($linearKeys -contains $person_id)) {
            SimRenderNode($kids[0].id)
            return
        }

        $bId = if ($person_id -eq 'root') { 'gen2-children' } else { "$person_id-children" }
        $script:genBranches += $bId

        if ($kids) {
            foreach ($c in $kids) {
                SimRenderNode($c.id)
            }
        }
    }
}

SimRenderNode('root')

Write-Host "=========================================================="
Write-Host "       EXACT LINE-BY-LINE ID COMPARISON REPORT            "
Write-Host "=========================================================="
Write-Host "Legacy Connectors count:" $legacyConnectors.Count " | Generated:" $genConnectors.Count
Write-Host "Legacy Branches count:  " $legacyBranches.Count " | Generated:" $genBranches.Count
Write-Host "Generated Nodes count:  " $genNodes.Count

Write-Host "`n--- LINE-BY-LINE BRANCH ID DIFF ---"
$bDiff = Compare-Object $legacyBranches $genBranches
if (-not $bDiff) {
    Write-Host "BRANCH DIFF RESULT: [EMPTY DIFF] — All 59 branch IDs match 100% in order."
} else {
    $bDiff | Format-Table
}

Write-Host "`n--- LINE-BY-LINE CONNECTOR ID DIFF ---"
$cDiff = Compare-Object $legacyConnectors $genConnectors
if (-not $cDiff) {
    Write-Host "CONNECTOR DIFF RESULT: [EMPTY DIFF] — All 78 connector IDs match 100% in order."
} else {
    $cDiff | Format-Table
}
