var Datepicker = function () {

    return {
        
        //Datepickers
        initDatepicker: function () {
	        // Regular datepicker
			
	       $('#date').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
			$('#datepicpayment').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        $('#datepicker2').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        $('#datepicker3').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        $('#datepicker4').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        $('#datepicker5').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
			$( function() {
				var dateFormat = "mm/dd/yy",
				  from = $( "#datepicker6" )
					.datepicker({
					  defaultDate: "+1w",
					  changeMonth: true,
					  changeYear: true,
					  numberOfMonths: 1,
					  prevText: '<i class="fa fa-angle-left"></i>',
	            	  nextText: '<i class="fa fa-angle-right"></i>'
					})
					.on( "change", function() {
					  to.datepicker( "option", "minDate", getDate( this ) );
					}),
				  to = $( "#datepicker7" ).datepicker({
					defaultDate: "+1w",
					changeMonth: true,
					changeYear: true,
					numberOfMonths: 1,
					prevText: '<i class="fa fa-angle-left"></i>',
	            	nextText: '<i class="fa fa-angle-right"></i>'
				  })
				  .on( "change", function() {
					from.datepicker( "option", "maxDate", getDate( this ) );
				  });

				function getDate( element ) {
				  var date;
				  try {
					date = $.datepicker.parseDate( dateFormat, element.value );
				  } catch( error ) {
					date = null;
				  }

				  return date;
				}
			  } );
/*	        $('#datepicker6').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        $('#datepicker7').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
*/	      /*  $('#datepicker8').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        $('#datepicker9').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });*/
			$( function() {
				var dateFormat = "mm/dd/yy",
					
				  from = $( "#datepicker8" )
					.datepicker({
					  defaultDate: "+1w",
					  changeMonth: true,
					  changeYear: true,
					  numberOfMonths: 1,
					  prevText: '<i class="fa fa-angle-left"></i>',
	            	  nextText: '<i class="fa fa-angle-right"></i>'
					})
					.on( "change", function() {
					  to.datepicker( "option", "minDate", getDate( this ) );
					}),
				  to = $( "#datepicker9" ).datepicker({
					defaultDate: "+1w",
					changeMonth: true,
					changeYear: true,
					numberOfMonths: 1,
					prevText: '<i class="fa fa-angle-left"></i>',
	            	nextText: '<i class="fa fa-angle-right"></i>'
				  })
				  .on( "change", function() {
					from.datepicker( "option", "maxDate", getDate( this ) );
				  });

				function getDate( element ) {
				  var date;
				  try {
					date = $.datepicker.parseDate( dateFormat, element.value );
				  } catch( error ) {
					date = null;
				  }

				  return date;
				}
			  } );
			
	       
			$( function() {
				var dateFormat = "mm/dd/yy",
				  from = $( "#datepicker10" )
					.datepicker({
					  defaultDate: "+1w",
					  changeMonth: true,
					  changeYear: true,
					  numberOfMonths: 1,
					  prevText: '<i class="fa fa-angle-left"></i>',
	            	  nextText: '<i class="fa fa-angle-right"></i>'
					})
					.on( "change", function() {
					  to.datepicker( "option", "minDate", getDate( this ) );
					}),
				  to = $( "#datepicker11" ).datepicker({
					defaultDate: "+1w",
					changeMonth: true,
					changeYear: true,
					numberOfMonths: 1,
					prevText: '<i class="fa fa-angle-left"></i>',
	            	nextText: '<i class="fa fa-angle-right"></i>'
				  })
				  .on( "change", function() {
					from.datepicker( "option", "maxDate", getDate( this ) );
				  });

				function getDate( element ) {
				  var date;
				  try {
					date = $.datepicker.parseDate( dateFormat, element.value );
				  } catch( error ) {
					date = null;
				  }

				  return date;
				}
			  } );
        
	        // Date range
	        $('#start').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            onSelect: function( selectedDate )
	            {
	                $('#finish').datepicker('option', 'minDate', selectedDate);
	            }
	        });
	        $('#finish').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            onSelect: function( selectedDate )
	            {
	                $('#start').datepicker('option', 'maxDate', selectedDate);
	            }
	        });
	        
	        // Inline datepicker
	        $('#inline').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        
	        // Inline date range
	        $('#inline-start').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            onSelect: function( selectedDate )
	            {
	                $('#inline-finish').datepicker('option', 'minDate', selectedDate);
	            }
	        });
	        $('#inline-finish').datepicker({
	            dateFormat: 'dd/mm/yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            onSelect: function( selectedDate )
	            {
	                $('#inline-start').datepicker('option', 'maxDate', selectedDate);
	            }
	        });
        }

    };
}();