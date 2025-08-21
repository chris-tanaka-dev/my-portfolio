import Image from 'next/image';
import {
  ReactLogo,
  TypeScriptLogo,
  NodeJsLogo,
  PythonLogo,
  AIMLLogo,
  WebGLLogo,
} from '../../common/TechnologyLogos';

const ProfileAvatar = () => (
  <div className="relative flex flex-col items-center mt-16">
    {/* Main avatar container - centered */}
    <div className="relative">
      {/* Glow effect behind avatar - centered on the avatar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>

      {/* Avatar circle with actual photo */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 animate-fade-in-scale shadow-2xl">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src="/photo.png"
            alt="Christopher Tanaka"
            width={160}
            height={160}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Rotating ring around avatar - centered on the avatar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-white/20 rounded-full animate-rotate-slow"></div>
    </div>

    {/* Name and title - now in normal document flow */}
    <div
      className="mt-8 text-center space-y-4 animate-fade-in-scale w-full"
      style={{ animationDelay: '0.3s' }}
    >
      <h1 className="text-5xl sm:text-6xl font-bold">
        <span className="gradient-text">Christopher</span>
        <br />
        <span className="text-white">Tanaka</span>
      </h1>

      <div className="relative">
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-300 mb-2">
          Senior Software Engineer
        </h2>

        {/* Animated underline */}
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto animate-pulse-glow"></div>
      </div>

      {/* Location badge */}
      <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full border border-white/10">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-300 font-medium">Seattle, WA</span>
      </div>
    </div>

    {/* Technology logos - positioned around the avatar */}
    <div className="absolute top-1/2 -right-24 transform -translate-y-1/2 space-y-4">
      {/* React Logo */}
      <div
        className="w-14 h-14 glass-card rounded-full border border-white/10 flex items-center justify-center animate-float hover:scale-110 transition-transform"
        style={{ animationDelay: '0.5s' }}
        title="React"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
          <ReactLogo className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* TypeScript Logo */}
      <div
        className="w-14 h-14 glass-card rounded-full border border-white/10 flex items-center justify-center animate-float hover:scale-110 transition-transform"
        style={{ animationDelay: '1.5s' }}
        title="TypeScript"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
          <TypeScriptLogo className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Node.js Logo */}
      <div
        className="w-14 h-14 glass-card rounded-full border border-white/10 flex items-center justify-center animate-float hover:scale-110 transition-transform"
        style={{ animationDelay: '2.5s' }}
        title="Node.js"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
          <NodeJsLogo className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>

    <div className="absolute top-1/2 -left-24 transform -translate-y-1/2 space-y-4">
      {/* Python Logo */}
      <div
        className="w-14 h-14 glass-card rounded-full border border-white/10 flex items-center justify-center animate-float hover:scale-110 transition-transform"
        style={{ animationDelay: '1s' }}
        title="Python"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
          <PythonLogo className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* AI/ML Logo */}
      <div
        className="w-14 h-14 glass-card rounded-full border border-white/10 flex items-center justify-center animate-float hover:scale-110 transition-transform"
        style={{ animationDelay: '2s' }}
        title="AI/ML"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
          <AIMLLogo className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* WebGL Logo */}
      <div
        className="w-14 h-14 glass-card rounded-full border border-white/10 flex items-center justify-center animate-float hover:scale-110 transition-transform"
        style={{ animationDelay: '3s' }}
        title="WebGL"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
          <WebGLLogo className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  </div>
);

export default ProfileAvatar;
