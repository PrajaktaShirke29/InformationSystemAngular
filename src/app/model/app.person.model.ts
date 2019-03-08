export class Person {

  constructor(
      public PersonalUniqueId: string,
      // public FullName: {
      //    FirstName: string,
      //    MiddleName: string,
      //    LastName: string
      // },
       public FullName: Object,
      // public FirstName: string,
      // public MiddleName: string,
      // public LastName: string,
      public Gender: string,
      public Dob: string,
      public Age: string,
      public Address: {},
      // public FlatNo: string,
      // public SocietyName: string,
      // public AreaName: string,
      public City: string,
      public State: string,
      public Pincode: string,
      public PhoneNo: string,
      public Telephone: string,
      public EmailAddr: string,
      public PhysicalDisability: string,
      public MaritalStatus: string,
      public EducationStatus: string,
      public BirthSign: string,
  ) {}
}

export const State = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
"Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
"Jharkhand","Karnataka","Karnataka","Madhya Pradesh","Maharashtra",
"Manipur","Meghalaya","Mizoram","Nagaland","Odisha",
"Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
"Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];
