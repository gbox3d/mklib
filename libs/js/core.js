/**
 * Created by gbox3d on 2014. 1. 18..
 *
 * mklib core
 *
 */


var mk = {}

mk.control = function (option) {

    var theApp = option.app;

    var page_history = [];

    this.changePage = function(newpage) {

        page_history.push(theApp.CurrentPage);

        theApp.CurrentPage.style.display = 'none';
        newpage.style.display = 'block';
        theApp.CurrentPage = newpage;
    }
    this.backPage = function() {

        theApp.CurrentPage.style.display = 'none';

        if(page_history.length > 0 ) {
            var newpage = page_history.pop();

            newpage.style.display = 'block';
            theApp.CurrentPage = newpage;
        }
    }

    this.OnButton = function(option,e) {

        option.target.classList.add('pressed');

        setTimeout((function() {
            option.target.classList.remove('pressed');

            option.complete();

            //theApp.mkControl.changePage(theApp.UIElement.pageIntro);

        }).bind(this),300);

    }

}


mk.helper = {

    setUpButton : function (option) {

        var _OnButtonDown = function(e) {

            // function(e) {
            this.classList.add('pressed');

            setTimeout((function() {
                this.classList.remove('pressed');

                option.OnClick();
                //theApp.mkControl.changePage(theApp.UIElement.pageIntro);

            }).bind(this),300);
            //}

        }

        //document.querySelector('#btn-intro')

        option.target.addEventListener('mousedown',
            _OnButtonDown
        );

    }

}