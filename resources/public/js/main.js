require(
    ["dojo/dom", "dojo/dom-style", "dojo/query", "dojo/_base/xhr", "dojo/on",
     "dojo/domReady!"],
    function(dom, domStyle, query, xhr, on) {
        on(dom.byId("videos"), ".vid-vote-btn:click", function(e) {
               var btn = this,
                   ctr = btn.previousSibling.previousSibling,
                   vid_id = this.id.substr(this.id.lastIndexOf("-") + 1),
                   count = parseInt(ctr.innerHTML),
                   new_count = count + 1;
               xhr.post({
                   url: "/",
                   content: { 
                       vidid: vid_id 
                   },
                   load: function(resp) {},
                   error: function(msg) 
                   {
                       console.log(msg.responseText);
                       ctr.innerHTML = count;
                       domStyle.set(ctr, "color", "#DBB");
                   }
               });
               ctr.innerHTML = new_count;
           });
    });
