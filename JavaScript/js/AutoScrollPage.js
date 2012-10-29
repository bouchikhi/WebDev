/**
 * Created by IntelliJ IDEA.
 * User: Evgeniy
 * Date: 21.10.12
 * Time: 16:39
 * To change this template use File | Settings | File Templates.
 */
var smoothJumpUp = function() {
    if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
        window.scrollBy(0,-250);
        setTimeout(smoothJumpUp, 1);
    }
}