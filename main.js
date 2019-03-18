var open = 'A long time ago, in a galaxy far, far away, a reprogrammed Imperial Droid named K-2SO was partnered with Cassian Andor, a memeber of the Rebel Alliance. Together they need to find, rescue, and aid Jyn Erso find her father and get the information about a secret weapon the Empire has developed. However, Jyn is not one to trust easily and does not beleive she needs rescuing. Jyn acquires a blaster. Does K-2 try to take it away, or does Cassian let her keep it?'

var take = 'K-2SO attemts to take the blaster fron Jyn. This results in him getting shot.'

var keep = 'Cassian allows Jyn to keep the baster, allowing her to help defend the group against Storm Troopers. Just as the group clears the way for them to move forward, a new cloud of Storm Troopers closes off the escape route. K-2 has a greneade. Does he use it to clear the way, or decide to go back to the ship?'

var ship = 'K-2 decides to NOPE right out and goes back to the ship.'

var toss = 'K-2 tosses the greneade at the encroaching Troopers, opening the alleyway for further progress. After making it to the archive storage library, the persuing Troopers corner Cassian, Jyn, and K-2SO. While Jyn and Cassian search for the Stardust file that contains all the information her father left for her, K-2 needs to hold off the Troopers. Does he fight them off as they come, or lock the vault door, assuredly resulting in his death?'

var fight = 'K-2 fights off the Storm Troopers, but there was not enough time to find the Stardust file.'

var lock = 'K-2 starts the process for locking the vault door and tells Jyn and Cassian to run. As he is closing the doors, the Troopers blast him. Goodbye.'

alert (open)
    var blaster = confirm('Let her keep it?')
    if (blaster == true) {
        alert (keep)
        var grenade = confirm('Do you throw it?')
        if (grenade == true) {
            alert (toss)
            var vault = confirm('Do you fight them off?')
            if (vault == true) {
                alert (fight)
            } else{
                alert (lock)
            }
        } else {
            alert (ship)
        }
    }else {
        alert (take)
    }







