$json = Get-Content 'genealogy.json' -Raw | ConvertFrom-Json

$totalPeople = $json.Count
$nullParents = @($json | Where-Object { $null -eq $_.parentId -or '' -eq $_.parentId })
$allIds = $json.id
$invalidParents = @($json | Where-Object { $_.parentId -and $_.parentId -notin $allIds })

$invalidGenPairs = @()
foreach ($node in $json) {
    if ($node.parentId) {
        $targetParentId = $node.parentId
        $pNode = $json | Where-Object { $_.id -eq $targetParentId }
        if ($node.generation -ne ($pNode.generation + 1)) {
            $invalidGenPairs += $node
        }
    }
}

Write-Host "=========================================="
Write-Host "          PHASE 1 VALIDATION REPORT       "
Write-Host "=========================================="
Write-Host "Total people:" $totalPeople "(Expected: 239)"
Write-Host "Count of parentId: null:" $nullParents.Count "(Expected: 1)"
Write-Host "Root node ID with parentId null:" $nullParents[0].id
Write-Host "Any parentId not matching a real ID:" $invalidParents.Count "(Expected: 0)"
Write-Host "Any parent/child pair where child.gen != parent.gen + 1:" $invalidGenPairs.Count "(Expected: 0)"
Write-Host "=========================================="

Write-Host "`n--- 10 SAMPLE ENTRIES (INCLUDING cain-enoch AND enosh) ---"
$sampleIds = @('root', 'cain', 'cain-enoch', 'seth', 'enosh', 'noah', 'shem', 'abraham', 'moses', 'david')
foreach ($sId in $sampleIds) {
    $node = $json | Where-Object { $_.id -eq $sId }
    if ($node) {
        Write-Host "ID: $($node.id) | Name: $($node.name) | Parent: $($node.parentId) | Gen: $($node.generation)"
    }
}
