
const mongoose = require('mongoose');

const activiteSchema = new mongoose.Schema(
    {
        id : {
            type: String, 
        },
        url : {
            type: String,
        },
        title : {
            type: String,
        },
        lead_text : {
            type: String,
        },
        description : {
            type: String,
        },
        date_start : {
            type: Date,
        },
        date_end : {
            type: Date,
        },
        date : {
            type: String,
        },
        occurrences : {
            type: String,
        },
        date_description : {
            type: String,
        },
        cover_url : {
            type: String,
        },
        cover_alt : {
            type: String,
        },
        cover_credit : {
            type: String,
        },
        tags : {
            type: String,
        },
        address_name : {
            type: String,
        },
        address_street : {
            type: String,
        },
        address_zipcode : {
            type: String,
        },
        address_city : {
            type: String,
        },
        lat_lon : {
            type: Array,
        },
        pmr : {
            type: Number,
        },
        blind : {
            type: Number,
        },
        deaf : {
            type: Number,
        },
        transport : {
            type: String,
        },
        contact_url : {
            type: String,
        },
        contact_phone : {
            type: String,
        },
        contact_mail : {
            type: String,
        },
        contact_facebook : {
            type: String,
        },
        contact_twitter : {
            type: String,
        },
        price_type : {
            type: String,
        },
        price_detail : {
            type: String,
        },
        access_type : {
            type: String,
        },
        access_link : {
            type: String,
        },
        access_link_text : {
            type: String,
        },
        updated_at : {
            type: Date,
        },
        image_couverture : {
            type: Array,
        },
        programs : {
            type: String,
        },
        address_url : {
            type: String,
        },
        address_url_text : {
            type: String,
        },
        address_text : {
            type: String,
        },
        title_event : {
            type: String,
        },

    }
)

module.exports = mongoose.model('activiteSchema', activiteSchema);
