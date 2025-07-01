
' Dr33MTV Roku Channel - Main Entry Point
' Part of the 1DreamUnited AI-driven global music ecosystem

sub Main()
    print "Dr33MTV Channel Starting..."
    
    ' Create the screen to display the UI
    screen = CreateObject("roSGScreen")
    m.port = CreateObject("roMessagePort")
    screen.setMessagePort(m.port)
    
    ' Create the main scene
    scene = screen.CreateScene("HomeScene")
    screen.show()
    
    ' Main event loop
    while(true)
        msg = wait(0, m.port)
        msgType = type(msg)
        
        if msgType = "roSGScreenEvent"
            if msg.isScreenClosed() then return
        end if
    end while
end sub
