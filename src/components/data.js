import {v4 as uuid4} from 'uuid';
const fieldData={
    'general':[
        {
            'name':'Name',
            'type': 'text',
            'content':'Enter name',
            'id': uuid4()
        },
        {
            'name':'Email',
            'type': 'email',
            'content':'Enter email',
            'id': uuid4()
        },
        {
            'name':'phone',
            'type':'tel',
            'content':'Enter phone number',
            'id':uuid4()
        }

    ],

    'educational': {
        'secondary':[
            {
            'name':'secondarySchool',
            'type':'text',
            'content':'Enter name of School',
            'id':uuid4()
        },
        {
            'name':'SchoolYear',
            'type':'number',
            'content':'Enter year of passing',
            'id':uuid4()
        },
        {
            'name':'SchoolDegree',
            'type':'text',
            'content':'Enter school degree',
            'id':uuid4()
        }
    ],
        'college':[
            {
                'name':'collegeName',
                'type':'text',
                'content':'Enter name of College',
                'id':uuid4()
            },
            {
                'name':'collegeYear',
                'type':'number',
                'content':'Enter year of passing',
                'id':uuid4()
            },
            {
                'name':'collegeDegree',
                'type':'text',
                'content':'Enter college degree',
                'id':uuid4()
            }
        ]
    },
    'work':[
        {
            'name': 'companyName',
            'type':'text',
            'content':'Enter company name',
            'id':uuid4()
        },
        {
            'name': 'position',
            'type':'text',
            'content':'Enter position title',
            'id':uuid4()
        },
        {
            'name': 'Responsibility',
            'type':'text',
            'content':'Enter main responsibilities for your job',
            'id':uuid4()
        },
        {
            'name': 'joiningDate',
            'type':'date',
            'content':'Enter joining date',
            'id':uuid4()
        },
        {
            'name': 'leavingDate',
            'type':'date',
            'content':'Enter leaving date',
            'id':uuid4()
        },
        
        
    ]
}

export {fieldData};