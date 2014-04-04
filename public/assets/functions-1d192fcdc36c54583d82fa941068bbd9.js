function viewport(){var t=window,e="inner";return"innerWidth"in window||(e="client",t=document.documentElement||document.body),{width:t[e+"Width"],height:t[e+"Height"]}}function toggle_main_menu(){if(viewport().width<=window.xs_screen_max){var t=$("#left-sidebar #mobile-menu-icon"),e=$("#left-sidebar #main-menu");e.is(":visible")?e.addClass("menu_closed_on_xs").removeClass("menu_opened_on_xs").slideUp("fast",function(){t.removeClass("active")}):e.addClass("menu_opened_on_xs").removeClass("menu_closed_on_xs").slideDown("fast",function(){t.addClass("active")})}}function main_menu_visiblity_on_resize(){var t=$("#left-sidebar #main-menu");viewport().width>window.xs_screen_max?t.hasClass("menu_closed_on_xs")&&t.show():(t.hasClass("menu_closed_on_xs")&&t.hide(),t.hasClass("menu_opened_on_xs")&&t.show())}function sections_content_vertical_position(){if(viewport().width>window.xs_screen_max){var t=$(window).height(),e=.8*t;$("#main-content .section-wrapper").each(function(){{var t=$(this).find(".content-wrapper"),i=t.height();$(this).hasClass("active")?!0:!1}t.css(i>e?{position:"static"}:{position:"absolute"})})}else $("#main-content .section-wrapper .content-wrapper").css({position:"static"})}function initialise_general_links_click_events(){$("a.link-scroll").click(function(t){var e=$(this).attr("href");if(void 0===e||""==e||"#"==e)return t.preventDefault(),!1;var i=e.substr(0,1);if("#"==i){if(!($(e).length>0))return!1;$("#main-content").addClass("same_page_link_in_action");var a=$(e).offset().top;$("html, body").stop().animate({scrollTop:a},1500,"easeInOutCubic",function(){$("#main-content").removeClass("same_page_link_in_action"),update_active_sections_on_scroll()}),t.preventDefault()}})}function initialise_main_menu_click_events(){$("#main-menu .menu-item > a").off("click"),$("#main-menu .menu-item > a").prop("onclick",null),$("#main-menu .menu-item > a").click(function(t){var e=$(this).attr("href"),i=e.substr(0,1),a=$(this).parent(".menu-item"),n=a.attr("id");if(a.hasClass("scroll")&&"#"==i){var s=void 0!==n&&""!=n?n:"";$("#main-content").addClass("same_page_link_in_action");var o=viewport().width>window.xs_screen_max?!0:!1;scroll_to_section(e,s,o),t.preventDefault()}else if(void 0===e||""==e||"#"==e)return t.preventDefault(),!1})}function scroll_to_section(t,e,i){if(void 0===t||""==t)return!1;var a=$("#main-content "+t+".section-wrapper");if(0==a.length||a.hasClass("active"))return!1;var n=a.offset().top;$("html, body").stop().animate({scrollTop:n},1500,"easeInOutCubic",function(){$("#main-content").removeClass("same_page_link_in_action")}),set_section_to_active(t,e,"",i)}function set_section_to_active(t,e,i,a){if(void 0!==t&&""!=t){var n=$("#main-content "+t+".section-wrapper");$("#main-menu .menu-item").removeClass("active"),$("#main-content .section-wrapper").removeClass("active");var s=void 0!=e&&""!=e?$("#main-menu #"+e+".menu-item"):"";if(""!=s&&0!=s.length)s.addClass("active");else{var o=t.substr(1);$("#main-menu #menu-item-"+o+".menu-item").addClass("active")}if(n.addClass("active"),toggle_top_icon_in_main_menu(),0!=a){var r=n.attr("data-custom-background-img"),c=void 0!==r&&""!=r?r:$("#outer-background-container").attr("data-default-background-img");if(void 0!==c&&""!=c){var d=1!=i?1500:550;$("#outer-background-container").backstretch(c,{fade:d})}}}}function get_all_section_wrappers_in_page(){var t=$("#main-content").find(".section-wrapper");return t}function update_active_sections_on_scroll(t,e){var i=void 0!==t&&""!=t?t:$("#main-content").find(".section-wrapper"),e=e!==e&&""!=e?e:.25*$(window).height(),a=$(document).scrollTop(),n=i.map(function(){var t=$(this).offset().top-e,i=$(this).height(),n=t+i;return a>t&&n>=a?this:void 0});if(void 0!==n&&""!=n){var s="#"+n.attr("id");n.hasClass("active")||set_section_to_active(s,"",!0)}}function toggle_top_icon_in_main_menu(){var t=$("#main-menu #menu-item-intro");t.hasClass("active")?t.css({opacity:0}).addClass("main-menu-top-icon-active"):t.css({opacity:.7}).removeClass("main-menu-top-icon-active")}function preload_section_backgrounds(){var t=get_all_section_wrappers_in_page();t.length>0&&t.each(function(){var t=$(this).attr("data-custom-background-img");if(void 0!==t&&""!=t){var e=new Image;e.src=t}})}function add_clear_items_to_fix_grid_items_different_heights_issue(){if($("#main-content .grid .grid-item").length>0){var t=$("#main-content .grid");if(t.hasClass("clearfix-for-2cols"))return t.find(".grid-item:nth-of-type(2n+2)").after('<article class="clearfix"></article>'),!1;if(t.hasClass("clearfix-for-3cols"))return t.find(".grid-item:nth-of-type(3n+3)").after('<article class="clearfix"></article>'),!1}}function effect_fade_out_inactive_grid_items(){$("#main-content .projects-grid.effect-fade-inactive").length>0&&$("#main-content .projects-grid.effect-fade-inactive").each(function(){var t=$(this);t.find(".grid-item .item-content").hover(function(){var e=$(this);e.css({opacity:1}),t.find(".grid-item .item-content").not(e).css({opacity:.3})},function(){var t=$(this);t.css({opacity:.3})}),t.hover(function(){},function(){setTimeout(function(){t.find(".grid-item .item-content").css({opacity:1})},200)})})}function set_height_of_parent_content_wrappers(){var t=$("#main-content .max-height");t.each(function(){var t=$(this).parents(".content-wrapper");if(t.length>0){t.parents(".section-wrapper").addClass("modified-height");var e=$(this).attr("data-height-percent");t.css(void 0===e||""==e||isNaN(e)?{height:"80%"}:{height:e+"%"})}})}function set_equal_height_to_all_carousel_slides_on_small_displays(){var t=$("#main-content .carousel");t.each(function(){var t=void 0===$(this).attr("data-height-percent")||""==$(this).attr("data-height-percent")||isNaN($(this).attr("data-height-percent"))?80:$(this).attr("data-height-percent"),e=t/100*viewport().height,i=$(this).find(".item .carousel-text-content");$(this).find(".item:not(.active)").css({opacity:"0",position:"absolute",display:"block"}),i.css({height:"auto"});var a=[];i.each(function(){a.push($(this).height())});var n=Math.max.apply(Math,a)+40;$(this).find(".item:not(.active)").attr("style",""),viewport().width<=window.sm_screen_max||n>=e?($(this).parents(".section-wrapper").addClass("modified-height"),i.height(n)):($(this).parents(".section-wrapper").removeClass("modified-height"),$(this).removeClass("slides-height-modified").find(".item .carousel-text-content").css({height:"100%"}))})}function populate_and_open_modal(t,e){var i=$("#common-modal.modal"),a=i.find(".modal-body"),n=$("#"+e);if(a.length>0&&n.length>0){$("#outer-container").fadeTo("fast",.2);var s=($(document).scrollTop(),n.html());a.empty().html(s),i.modal(),i.on("shown.bs.modal",function(){position_modal_at_centre()}),i.on("hide.bs.modal",function(){$("#outer-container").fadeTo("fast",1)}),i.on("hidden.bs.modal",function(){a.empty()})}return t.preventDefault(),!1}function position_modal_at_centre(){var t=$(".modal");if(t.length>0&&t.is(":visible")){var e=t.find(".modal-dialog"),i=(e.width(),e.height()),a=i+70<viewport().height?!0:!1;if(viewport().width>window.sm_screen_max&&1==a){var n=(viewport().height-i)/2;e.css({"margin-top":n+"px","margin-bottom":"20px"})}else e.removeAttr("style")}}function go_to_top_visibility(){var t=$("#go-to-top");if(t.length>0){var e=$(document).scrollTop();e<viewport().height?t.removeClass("active"):t.addClass("active")}}function scroll_to_top(){$("html, body").stop().animate({scrollTop:0},1500,"easeInOutCubic",function(){$("#go-to-top").removeClass("active")})}function load_images(t,e,a){var n=$("."+t);if(n.length>0){var s=new Array;n.each(function(){var t=$(this).attr("data-img-src");if(void 0!==t&&""!=t){var e=new Array;e.img_object=$(this),e.img_src=t,s.push(e)}});var o=new Image,r=s.length;for(i=0;r>i;i++)o.src=s[i].img_src,s[i].img_object.attr("src",s[i].img_src),1==e&&s[i].img_object.removeClass(t),1==a&&i==r-1&&(!jQuery.browser.mobile||viewport().width>window.xs_screen_max)&&sections_content_vertical_position()}}function validate_and_submit_forms(t){var e=void 0!==t&&t.length>0?t:$("form.validate-form");e.each(function(){var t=$(this);t.find(".validate-field").each(function(){$(this).change(function(){if($(this).siblings(".alert").fadeOut("fast",function(){$(this).remove()}),""!=$(this).val().trim()){var e=validate_fields(t,$(this));if(e.length>0&&void 0!==e[0].message&&""!=e[0].message&&"success"!=e[0].message){var i='<div class="alert">'+e[0].message+"</div>";$(this).after(i),$(this).siblings(".alert").fadeIn("fast")}}})}),t.submit(function(e){e.preventDefault(),$(this).find(".form-loader").fadeIn("fast");var i=$(this).attr("action");if(void 0===i&&""==i)return!1;$(this).find(".alert").fadeOut("fast",function(){$(this).remove()}),$(this).find(".form-general-error-container").fadeOut("fast",function(){$(this).empty()});var a=!1;return $(this).find(".validate-field").each(function(){var e=validate_fields(t,$(this));if(e.length>0&&void 0!==e[0].message&&""!=e[0].message&&"success"!=e[0].message){var i='<div class="alert">'+e[0].message+"</div>";$(this).after(i),$(this).siblings(".alert").fadeIn("fast"),a=!0}}),1==a?($(this).find(".form-loader").fadeOut("fast"),!1):void $.ajax({type:"POST",url:i,data:$(this).serialize(),dataType:"html",success:function(e){t.find(".form-loader").fadeOut("fast");var i="Form submitted successfully."==e?!0:!1,a='<div class="alert ';a+=1==i?"success":"error",a+='">'+e+"</div>",t.find(".form-general-error-container").html(a).fadeIn("fast",function(){$(this).delay(1e4).fadeOut("fast",function(){$(this).remove()})}),1==i&&t.find(".form-control").val("")},error:function(){t.find(".form-loader").fadeOut("fast");var e='<div class="alert">An error occured. Please try again later.</div>';t.find(".form-general-error-container").html(e).fadeIn("fast")}})})})}function validate_fields(t,e){if(void 0!==t&&t.length>0){var i=void 0!==e&&e.length>0?e:t.find(".validate"),a=new Array;return i.each(function(){var t=$(this).attr("data-validation-type"),e=$(this).hasClass("required"),i=$(this).val().trim(),n=new Array;n.field_object=$(this),n.message="success",1!=e||""!=i&&null!==i&&void 0!==i||(n.message="This field is required"),"string"==t&&""!=i&&null!==i&&void 0!==i?null==i.match(/^[a-z0-9 .\-]+$/i)&&(n.message="Invalid characters found."):"email"==t&&""!=i&&null!==i&&void 0!==i?null==i.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)&&(n.message="Please enter a valid email address."):"phone"==t&&""!=i&&null!==i&&void 0!==i&&null==i.match(/^\(?\+?[\d\(\-\s\)]+$/)&&(n.message="Invalid characters found."),a.push(n)}),a}}function fixed_bg_image_dimensions_on_mobile(){var t=$("#outer-background-container");if(t.length>0){var e=t.attr("data-default-background-img");if(void 0!==e&&""!=e)if(jQuery.browser.mobile)$("body").css({"background-image":"","background-position":"","background-repeat":"","background-size":"","background-attachment":"",background:"#000"}),t.css({opacity:"1"});else{var i=viewport().height+.1*viewport().height,a=(viewport().width+.1*viewport().width,new Image);a.src=e,$("body").css({"background-image":"url("+e+")","background-position":"top center","background-repeat":"no-repeat","background-attachment":"fixed","background-size":"auto "+i+"px, cover"}),t.css({opacity:"0"})}}}function contact_form_IE9_placeholder_fix(){var t=$("form");t.each(function(){$(this);$(this).find(".form-control").each(function(){var t=$(this).attr("placeholder");void 0!==t&&""!=t&&($(this).val(t),$(this).focus(function(){$(this).val()==t&&$(this).val("")}),$(this).blur(function(){""==$(this).val()&&$(this).val(t)}))})})}window.xs_screen_max=768,window.sm_screen_max=992;