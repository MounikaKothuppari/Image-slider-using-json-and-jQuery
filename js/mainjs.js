var oImage, index = 0;
$(document).ready(function() {
            //getting json
            var x = $.ajax({
                url: "js/json/images.json",
                type: 'GET',
                dataType: 'JSON',
            });
            x.success(function(data) {
                        oImage = data;
        $('div #next').click(function() {
            ++index;
            if (index >= oImage.Images.length) {
                index = 0;
            }
            $('div img').attr("src", oImage.Images[index].url);
        });
        $('div #prev').click(function() {
            --index;
            if (index < 0) {
                index = oImage.Images.length - 1;
            }
            $('div img').attr("src", oImage.Images[index].url);
        });
        $('#main_img').on('load', function() {
            $('.loader').hide();
        });
    });
});
