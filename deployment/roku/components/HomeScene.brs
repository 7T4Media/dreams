
' Dr33MTV Home Scene - Main UI Controller
' Manages content grid, video playback, and AI recommendations

sub init()
    print "HomeScene: Initializing..."
    
    ' Get references to UI components
    m.contentGrid = m.top.findNode("contentGrid")
    m.videoPlayer = m.top.findNode("videoPlayer")
    m.loadingSpinner = m.top.findNode("loadingSpinner")
    
    ' Set up event handlers
    m.contentGrid.observeField("itemSelected", "onContentSelected")
    m.videoPlayer.observeField("state", "onVideoPlayerState")
    
    ' Initialize content loading
    loadContent()
end sub

sub loadContent()
    print "HomeScene: Loading content..."
    
    ' Create content task to fetch data
    m.contentTask = CreateObject("roSGNode", "ContentTask")
    m.contentTask.observeField("content", "onContentLoaded")
    m.contentTask.control = "RUN"
end sub

sub onContentLoaded()
    print "HomeScene: Content loaded"
    
    ' Hide loading spinner
    m.loadingSpinner.visible = false
    
    ' Set content to grid
    if m.contentTask.content <> invalid
        m.contentGrid.content = m.contentTask.content
        m.contentGrid.setFocus(true)
    end if
end sub

sub onContentSelected()
    print "HomeScene: Content selected - index: " + str(m.contentGrid.itemSelected)
    
    ' Get selected content
    selectedContent = m.contentGrid.content.getChild(m.contentGrid.itemSelected)
    
    if selectedContent <> invalid
        ' Hide grid and show video player
        m.contentGrid.visible = false
        m.videoPlayer.visible = true
        m.videoPlayer.content = selectedContent
        m.videoPlayer.control = "play"
        m.videoPlayer.setFocus(true)
    end if
end sub

sub onVideoPlayerState()
    state = m.videoPlayer.state
    print "HomeScene: Video player state: " + state
    
    if state = "finished" or state = "error"
        ' Return to grid view
        m.videoPlayer.visible = false
        m.videoPlayer.control = "stop"
        m.contentGrid.visible = true
        m.contentGrid.setFocus(true)
    end if
end sub

function onKeyEvent(key as string, press as boolean) as boolean
    if press
        if key = "back"
            if m.videoPlayer.visible
                ' Return to grid from video player
                m.videoPlayer.visible = false
                m.videoPlayer.control = "stop"
                m.contentGrid.visible = true
                m.contentGrid.setFocus(true)
                return true
            end if
        end if
    end if
    
    return false
end function
