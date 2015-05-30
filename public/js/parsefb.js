Parse.initialize("m8lsJLtBtcOGqT0h9RmcWRIpxpiwyb3Yq6HqrCk2", "XxRGWHTh79dNb2iMpuZ9k5uKUU9IPQDmghGwfgJ6");

   window.fbAsyncInit = function() {
        Parse.FacebookUtils.init({
          appId      : '485829744905395',
          xfbml      : true,
          version    : 'v2.3'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));