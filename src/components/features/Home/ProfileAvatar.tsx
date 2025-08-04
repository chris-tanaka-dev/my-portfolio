import { UserCircle } from 'lucide-react';

const ProfileAvatar = () => (
  <div className="flex flex-col items-center text-center gap-6">
    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-scale-in shadow-lg">
      <UserCircle size={160} className="text-blue-500" />
    </div>
    <div className="space-y-2">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white animate-fade-in">
        Christopher Tanaka
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400 animate-fade-in">
        Senior Software Engineer
      </h2>
    </div>
  </div>
);

export default ProfileAvatar;
