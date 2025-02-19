
import { useState } from 'react';

export const GenderCheckbox = ({oncheckboxchange,selectedgender}) => {
   

    return (
        <div className="form-control">
            <div className="flex items-center mt-4">
                <label className="label cursor-pointer mr-4">
                    <span className="label-text">Male</span>
                    <input
                        type="radio"
                        name="Gender"
                        value="male"
                        checked={selectedgender === 'male'}
                        onChange={() => oncheckboxchange("male")}
                        className="radio radio-primary ml-2"
                    />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Female</span>
                    <input
                        type="radio"
                        name="Gender"
                        value="female"
                        checked={selectedgender === 'female'}
                        onChange={() => oncheckboxchange("female")}
                        className="radio radio-primary ml-2"
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;


// starter code of genderbox


// import { useState } from 'react';

// export const GenderCheckbox = () => {
//     const [selectedGender, setSelectedGender] = useState('');

//     return (
//         <div className="form-control">
//             <div className="flex items-center mt-4">
//                 <label className="label cursor-pointer mr-4">
//                     <span className="label-text">Male</span>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="male"
//                         checked={selectedGender === 'male'}
//                         onChange={() => setSelectedGender('male')}
//                         className="radio radio-primary ml-2"
//                     />
//                 </label>
//                 <label className="label cursor-pointer">
//                     <span className="label-text">Female</span>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="female"
//                         checked={selectedGender === 'female'}
//                         onChange={() => setSelectedGender('female')}
//                         className="radio radio-primary ml-2"
//                     />
//                 </label>
//             </div>
//         </div>
//     );
// };

// export default GenderCheckbox;