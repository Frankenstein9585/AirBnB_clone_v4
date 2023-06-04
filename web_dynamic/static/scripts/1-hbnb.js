$(document).ready(function() {
    let amenities = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            amenities[amenityId] = amenityName;
        } else {
            delete amenities[amenityId];
        }

        updateAmenities();
    });

    function updateAmenities() {
//        const amenitiesList = Object.values(amenities);
//        const amenitiesString = amenitiesList.join(', ');

        $('.amenities h4').text(Object.values(amenities).join(', '));
    }
});