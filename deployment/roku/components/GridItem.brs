
' Dr33MTV Grid Item Component
' Individual item display in the content grid

sub init()
    print "GridItem: Initializing..."
    
    ' Get references to child nodes
    m.itemPoster = m.top.findNode("itemPoster")
    m.itemTitle = m.top.findNode("itemTitle")
    m.focusRect = m.top.findNode("focusRect")
    
    ' Set up focus handling
    m.top.observeField("focusedChild", "onFocusChanged")
end sub

sub onContentSet()
    content = m.top.itemContent
    
    if content <> invalid
        ' Set poster image
        if content.hdPosterUrl <> invalid and content.hdPosterUrl <> ""
            m.itemPoster.uri = content.hdPosterUrl
        else
            ' Use default poster
            m.itemPoster.uri = "pkg:/images/default_poster.jpg"
        end if
        
        ' Set title
        if content.title <> invalid
            m.itemTitle.text = content.title
        end if
    end if
end sub

sub onFocusChanged()
    if m.top.hasFocus()
        ' Show focus indicator
        m.focusRect.visible = true
        ' Scale up slightly for focus effect
        m.top.scale = [1.1, 1.1]
    else
        ' Hide focus indicator
        m.focusRect.visible = false
        ' Return to normal scale
        m.top.scale = [1.0, 1.0]
    end if
end sub
