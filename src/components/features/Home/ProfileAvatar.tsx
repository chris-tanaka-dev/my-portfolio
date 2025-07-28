import { UserCircle } from 'lucide-react';

const ProfileAvatar = () => (
  <div className="flex flex-col items-center text-center gap-2">
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 mb-2 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-fade-in">
      <UserCircle size={128} className="text-blue-500" />
    </div>
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in">
      Christopher Tanaka
    </h1>
    <h2 className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 animate-fade-in">
      Senior Software Engineer
    </h2>
  </div>
);

export default ProfileAvatar;
