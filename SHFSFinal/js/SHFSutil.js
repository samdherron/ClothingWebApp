
/**
 * File Name: SHutil.js
 *
 *
 * Revision History:
 *       Sam Herron, 2018-4-05 : Created file
 */


function getTotalRating(SHrating1, SHrating2, SHrating3) {



    var totalRating = (SHrating1 + SHrating2 + SHrating3) / 3;

    console.log(SHrating1, + " " + SHrating2, + " " + SHrating3);
    console.log(totalRating);

    return totalRating;
}

function doValidate_SHFSaddFeedback() {
    var form = $("#SHFSaddFeedback");
    form.validate( {

        rules:{
            SHFSbusinessName: {
                required: true,
                minlength: 2,
                maxlength: 30

            },

            SHFSemail: {
                required: true
            },

            SHFSreviewDate: {
                required: true
            },

            SHFSfoodQuality: {
                min: 0,
                max: 5
            },

            SHFSserviceRating: {
                min: 0,
                max: 5
            },

            SHFSvalueRating: {
                min: 0,
                max: 5
            }


        },
        messages: {
            SHFSbusinessName: {
                required: "You must enter a business name",
                minlength: "Name must be greater than 2 characters",
                maxlength: "Name cannot be greater than 20 characters"

            },

            SHemail: {
                required: "You must enter an email"
            },

            SHFSreviewDate: {
                required: "You must enter a date"
            },

            SHFSfoodQuality: {
                min: "Cannot be lower than 0",
                max: "Cannot be greater than 5"
            },

            SHFSserviceRating: {
                min: "Cannot be lower than 0",
                max: "Cannot be greater than 5"
            },

            SHFSvalueRating: {
                min: "Cannot be lower than 0",
                max: "Cannot be greater than 5"
            }
        }
    });

    return form.valid();

}

function doValidate_SHFSeditFeedback() {
    var form = $("#SHFSeditFeedback");
    form.validate({
        rules:{
            SHFSeditBusinessName: {
                required: true,
                minlength: 2,
                maxlength: 30

            },


            SHFSeditEmail: {
                required: true
            },

            SHFSeditComments: {
                required: false
            },


            SHFSeditFoodQuality: {
                required: false,
                min: 0,
                max: 5
            },

            SHFSeditServiceRating: {
                required: false,
                min: 0,
                max: 5
            },

            SHFSeditValueRating: {
                required: false,
                min: 0,
                max: 5
            }
        },
        messages:{

                SHFSeditBusinessName: {
                    required: "You must enter a business name",
                    minlength: "Name must be greater than 2 characters",
                    maxlength: "Name cannot be greater than 20 characters"

                },


                SHFSeditEmail: {
                    required: "You must enter an email"
                },

                SHFSeditComments: {

                },

                SHFSeditReviewDate: {
                    required: "You must enter a date"
                },

                SHFSeditFoodQuality: {
                    min: "Cannot be lower than 0",
                    max: "Cannot be greater than 5"
                },

                SHFSeditServiceRating: {
                    min: "Cannot be lower than 0",
                    max: "Cannot be greater than 5"
                },

                SHFSeditValueRating: {
                    min: "Cannot be lower than 0",
                    max: "Cannot be greater than 5"
                }


            }
    });

    return form.valid();

}

