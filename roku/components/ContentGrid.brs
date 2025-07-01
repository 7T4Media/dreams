
' Dr33MTV Content Grid Component
' Displays curated music content in a grid layout

sub init()
    print "ContentGrid: Initializing..."
    
    ' Configure grid appearance
    m.top.rowFocusAnimationStyle = "fixedFocusWrap"
    m.top.vertFocusAnimationStyle = "fixedFocus"
    m.top.showRowLabel = [true]
    m.top.showRowCounter = [true]
    
    ' Set up item component
    m.top.rowItemSize = [[300, 200]]
    m.top.itemComponentName = "GridItem"
    
    ' Observe selection events
    m.top.observeField("rowItemSelected", "onItemSelected")
end sub

sub onItemSelected()
    print "ContentGrid: Item selected - row: " + str(m.top.rowItemSelected[0]) + " item: " + str(m.top.rowItemSelected[1])
    
    ' Calculate flat index for compatibility
    rowIndex = m.top.rowItemSelected[0]
    itemIndex = m.top.rowItemSelected[1]
    
    if m.top.content <> invalid and rowIndex < m.top.content.getChildCount()
        row = m.top.content.getChild(rowIndex)
        if itemIndex < row.getChildCount()
            ' Set the flat item index for parent scene
            m.top.itemSelected = (rowIndex * 4) + itemIndex ' Assuming 4 items per row
        end if
    end if
end sub
