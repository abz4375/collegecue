import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState , useEffect } from 'react';


interface Props {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const GuidelinesPopup: React.FC<Props> = ({ open, onClose, onAccept }) => {
  const router = useRouter();

  const [sessionStatus, setSessionStatus] = useState<string[]>([]);

  useEffect(() => {
    const fetchSessionStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8000/session-status/1/');
        console.log(response.data);
        setSessionStatus(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSessionStatus(); // Make sure to call the function here
  }, []);

  if (!open) return null; // Don't render if the popup is not open

  const handleAccept = () => {
    console.log("Accept button clicked");
    onAccept();
    router.push('/testseries/quiz');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[30] bg-black bg-opacity-50">
      <div className="w-[450px] bg-white border border-gray-100 shadow-md rounded-lg p-6">
        <div className="text-lg font-semibold mb-4">Guidelines</div>
        <div className="mb-4 text-gray-600">
          Please read the guidelines carefully before starting the quiz. Make sure you understand the rules and requirements.
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPopup;


//import { Dialog } from '@headlessui/react';
//import { useRouter } from 'next/navigation';
//import Link from 'next/link';
//
//interface Props {
//  open: boolean;
//  onClose: () => void;
//  onAccept: () => void;
//}
//
//const GuidelinesPopup: React.FC<Props> = ({ open, onClose, onAccept }) => {
//  const router = useRouter();
//
//  const handleAccept = () => {
//    console.log("Accept button clicked");  // Debugging log
//    onAccept();
//    router.push('/testseries/quiz');
//  };
//
//  return (
//    <div className='w-[450px] bg-white border border-gray-100 shadow-md absolute flex justify-center items-center z-[30]'>
//      <div>Hello</div>
//    </div>
//
////   <Dialog
////     open={open}
////     onClose={onClose}
////     className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#FFFFF] drop-shadow-lg"
////   >
////     <Dialog.Overlay className="fixed inset-0 opacity-25 drop-shadow-lg" />
////
////     <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
////       <Dialog.Title className="text-lg font-semibold mb-4">Guidelines</Dialog.Title>
////       <Dialog.Description className="mb-4">
////         Please read the guidelines before starting the quiz.
////       </Dialog.Description>
////       <div className="flex justify-end">
////         <button
////           className="mr-2 px-4 py-2 text-blue-600 font-semibold rounded"
////           onClick={onClose}
////         >
////           Cancel
////         </button>
////           <button
////             className="px-4 py-2 text-blue-600 font-semibold rounded hover:bg-black hover:text-white"
////             onClick={handleAccept}
////           >
////             Accept
////           </button>
////       </div>
////     </div>
////   </Dialog>
//  );
//};
//
//export default GuidelinesPopup;
