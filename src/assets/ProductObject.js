import { image } from "./ImageObject";

export const prescriptionData = 
[
    {
        id: 1,
        message: "Upload your prescription.",
        row: 1, 
        col: 1
    },

    {
        id: 2,
        message: "Upload your prescription.",
        row: 2, 
        col: 1
    },

    {
        id: 3,
        message: "Upload your prescription.",
        row: 1, 
        col: 2
    },

    {
        id: 4,
        message: "Upload your prescription.",
        row: 2, 
        col: 2
    }
];

export const specialFeatureData = 
[
    {
        image: image.Sunday_Labs,
        message: 'Sunday Labs',
        bg_color: 'bg-[#60A5FA]',
        bg_hover: 'hover:bg-[#3B82F6]'
    },

    {
        image: image.Popular_Tests_And_Scans,
        message: 'Popular Tests',
        bg_color: 'bg-[#409FD8]',
        bg_hover: 'hover:bg-[#378CC4]'
    },

    {
        image: image.Popular_Tests_And_Scans,
        message: 'Health Package',
        bg_color: 'bg-[#2585C4]',
        bg_hover: 'hover:bg-[#1E6EA7]'
    }
]

export const popularTestData = 
[
    {
        image: image.GlucoseFastingAndPostPrandial,
        message:'Glucose Fasting and Post Prandial' 
    },
    {
        image: image.BloodGroup,
        message: 'Blood Group'
    },
    {
        image: image.VitaminD,
        message: 'Vitamin D'
    },
    {
        image: image.CompleteBloodCount,
        message: 'Complete Blood Count'
    },
    {
        image: image.IronStudiesSerum,
        message: 'Iron Studies Serum'
    }
]

export const popularScans = 
[
    {
        image: image.Digital_XRay,
        message: 'Digital X-Ray'
    },
    {
        image: image.HCRT_Scan,
        message: 'HCRT Scan'
    },
    {
        image: image.Brain_Plain,
        message: 'Brain (Plain)'
    },
    {
        image: image.Echocardiogram_2D,
        message: '2D Echocardiogram'
    },
    {
        image: image.Electrocardiogram_ECG,
        message: 'Electrocardiogram ECG'
    }
]

export const testByHealtCondition = 
[
    {
        image: image.Anemia,
        message: 'Anemia'
    },
    {
        image: image.Cardiac,
        message: 'Cardiac'
    },
    {
        image: image.Hypertension,
        message: 'Hypertension'
    },
    {
        image: image.Liver_RFT,
        message: 'Liver (RFT)'
    },
    {
        image: image.Kidney_RFT,
        message: 'Kidney(RFT)'
    },
    {
        image: image.Fever_Profile,
        message: 'Fever Profile'
    },
]