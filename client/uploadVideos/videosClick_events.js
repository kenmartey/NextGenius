//Template.uploadVideos.events({
//    "change .upload-players-video-file_bag": function(event, template){
//        alert("please wait while we load your video. we will notify you once its done!");
//        $("#videoDisplay").hide();
//        //console.log("hellooeoe")
//        var files = $("input.upload-players-video-file_bag")[0].files
//        S3.upload({
//            files:files,
//            path:"videos",
//            unique_name: false,
//            acl: "public-read"
//        },function(error, success){
//            if (error) {
//                swal('we are sorry, something went wrong');
//            }
//            else {
//                Session.set('fileExists', true);
//                Session.set('absoluteVideoUrl', success.url);
//                Session.set('relativeVideoUrl', success.relative_url);
//                Session.set('percent_uploaded', success.percent_uploaded);
//                $("#videoDisplay").show();
//
//            }
//        });
//    },
//    "click [data-action='remove-upload-players-video']": function() {
//        var relative_url = this.relative_url;
//        S3.delete(
//            relative_url,
//            function(error, success) {
//                if (error) {
//                    console.log(error);
//                }
//                else {
//                    this.status = 'removed';
//                    reset_form_element( $('.upload-players-video-file_bag') );
//                    $("#videoDisplay .myvideocontrolclass").attr("src", "");
//                    $('.video-thumbnail').hide();
//                    $("[data-action='remove-upload-players-video']").hide();
//                    $(".progress").remove();
//                    $("#videoDisplay").remove();
//                }
//            });
//
//    }
//});
//reset_form_element = function(e) {
//    e.wrap('<form>').parent('form').trigger('reset');
//    e.unwrap();
//}