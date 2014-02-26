
/* 
 * jQuery Data spiders plugin 0.1
 * Created by Paul Rada
 * www.github.com/PaulAndreRada
 *
 * TODO : 
 * - Update FilterDataFor method to use REGEX
 * - Encapsulate code into a jQuery method ( allowing the user
 * to activate the crawlers on any script )
 * - Create a base method for property extractions
 * - Expand the crawlers list
 * - Expand the execute list   
 *
 */


// UTILITY HELPERS
// quick utility function to extrac elements 
// with a partial data tag
$.fn.filterDataFor = function(set) {
    var elems=$([]);
    this.each(function(i,e) {
	    $.each( $(e).data(), function(j,f) {
		    if (j.substring(0, set.length) == set) {
			elems = elems.add($(e));
		    }
		});
	});
    return elems;
}


// Data spider
$(function($){
       	'use strict';

	var DataCrawler = function( options ){
	    
	    // Create the return object 
	    var spider = {
		// The settings get overwritten with
		// The adding of an option argument
		settings : {
		    $doc : $( document ),
		},
		// Create Objects to store the different method types
		crawl : {},
		execute : {}
	    },
	    //
	    // API - CONSTANTS
	    PLUGIN_NAME = 'spider',
	    ON_CLICK = PLUGIN_NAME + 'Onclick',
	    ON_HOVER = PLUGIN_NAME + 'Onhover',
	    //
	    // Merge the new options with the defualt settings
	    // and store it in an easy to use variable
	    s = $.extend( spider.settings , options );
	    
	    spider.crawl = {
		
		clicks : function(){
		    //
		    // Crawl the DOM for the ON_CLICK data tags
		    // and attatch a click event to them
		    // 
		    s.$doc
		    //
		    .find( 'a, div, ul, ol, li' )
		    //
		    .filterDataFor( ON_CLICK  )
		    //
		    .on('click', function( e ){
			    //
			    e.preventDefault();
			    //
			    spider.extractionChain( ON_CLICK )
			    //
			    .extractData( this )
			    //
			    .extractCommand()
			    //
			    .extractTarget()
			    //
			    .executeCommand();
			    //
			});

		    return spider;
		    //
		}, // clicks


		// Set mouseover events
		hovers : function(){
		    //
		    // Crawl the DOM for the ON_HOVER data tags
		    // and attatch a click event to them
		    //
		    s.$doc
		    //
		    .find( 'a, div, ul, ol, li' )
		    //
		    .filterDataFor( ON_HOVER  )
		    //
		    .on( 'mouseover' , function( e ){
			    //
			    e.preventDefault();
			    //
			    spider.extractionChain( ON_HOVER )
			    //
			    .extractData( this )
			    //
			    .extractCommand()
			    //
			    .extractTarget()
			    //
			    .executeCommand();
			    //
			});

		    return spider;
		    //
		} // hovers
	    };

	    
	    // Extracts all the nesessary information of the 
	    // method called, then executes it
	    spider.extractionChain = function( crawlEvent ){

		var chain = {},
		CRAWL_EVENT = crawlEvent.toLowerCase(),
		eventLength = CRAWL_EVENT.length,
		$el,
		target,
		dataTags,
		eventLength,
		executable,
		origDataTag,
		lowCaseDataTag;

		
		chain.extractData = function( element ){
		    //
		    // extract triggered element and
		    // its data array
		    $el = $( element ),
		    dataTags = $el.data();
		    //
		    return chain;
		},


		chain.extractCommand = function(){
		    //
		    // Loop over the elements data tags and 
		    // compare until the event matches 
		    // the triggered event
		    for( var prop in dataTags ) {
			//
			// Save the orginal tag to extract the target
			origDataTag = prop;
			//
			// match the Case formating
			lowCaseDataTag = prop.toLowerCase();
			//
			// Check for the exact data tag that
			// triggered this event
			if( lowCaseDataTag
			    .substring( 0, eventLength ) === CRAWL_EVENT 
			    ){
			    //
			    // extract the command and save it
			    executable = lowCaseDataTag
				.substring( eventLength );
			    //
			    break;
			}
		    }
		    return chain;
		},


		chain.extractTarget = function(){
		    //
		    // extract the target element ( the data value )  
		    // in css/sizzle ready form 
		    target = dataTags[ origDataTag ];
		    //
		    return chain;
		},


		chain.executeCommand = function(){
		    //
		    // call the jQuery method specified in 
		    // the data tag and pass it the target element(s)
		    spider.execute()[ executable ]( target );
		    //
		    return chain;
		}
		
		return chain;
		//
	    }; // spider.extractionChain
	    
	    
	    
	    // EXECUTION METHODS
	    // Chain should build up as many of the jQeury
	    // css handling methods.
	    spider.execute = function(){
		

		var self = {};
		
		
		self.toggle = function( target ){
		    //
		    var $target = s.$doc.find( target );
		    //
		    $target.toggle();
		    //
		    return self;
		};
	    

		self.fadeout = function( target ){
		    //
		    var $target = s.$doc.find( target );
		    //
		    $target.fadeOut();
		    //
		    return self;
		};
		
		
		return self;
		//
	    }; // execute
	    
	    
	    return spider;
	    //
	};// DataCrawler
	
	
	// Activate the spider
	var spider = DataCrawler();
	spider.crawl.clicks();
	spider.crawl.hovers();
       
    });



