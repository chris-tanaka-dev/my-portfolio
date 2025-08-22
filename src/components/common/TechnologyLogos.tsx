import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDotnet,
  SiRubyonrails,
  SiTensorflow,
  SiWebgl,
  SiSvg,
  SiWebassembly,
  SiWebrtc,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiStorybook,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiGraphql,
  SiRedux,
  SiVite,
  SiWebpack,
  SiBabel,
  SiNpm,
  SiYarn,
  SiThreedotjs,
  SiD3Dotjs,
  SiOpenai,
  SiGithub,
  SiGithubactions,
  SiJenkins,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiLighthouse,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export type SkillKey =
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'html5'
  | 'css3'
  | 'sass'
  | 'nodejs'
  | 'express'
  | 'python'
  | 'csharp'
  | 'rails'
  | 'aiml'
  | 'webgl'
  | 'svg'
  | 'wasm'
  | 'webrtc'
  | 'nextjs'
  | 'tailwind'
  | 'mui'
  | 'storybook'
  | 'aws'
  | 'docker'
  | 'kubernetes'
  | 'redis'
  | 'postgres'
  | 'mongodb'
  | 'mysql'
  | 'firebase'
  | 'supabase'
  | 'prisma'
  | 'graphql'
  | 'redux'
  | 'vite'
  | 'webpack'
  | 'babel'
  | 'npm'
  | 'yarn'
  | 'threejs'
  | 'd3'
  | 'openai'
  | 'github'
  | 'githubactions'
  | 'jenkins'
  | 'jest'
  | 'testinglibrary'
  | 'cypress'
  | 'lighthouse';

export const skillIcons: Record<SkillKey, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss3,
  sass: SiSass,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  csharp: SiDotnet,
  rails: SiRubyonrails,
  aiml: SiTensorflow,
  webgl: SiWebgl,
  svg: SiSvg,
  wasm: SiWebassembly,
  webrtc: SiWebrtc,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  mui: SiMui,
  storybook: SiStorybook,
  aws: SiAmazon,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  redis: SiRedis,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
  supabase: SiSupabase,
  prisma: SiPrisma,
  graphql: SiGraphql,
  redux: SiRedux,
  vite: SiVite,
  webpack: SiWebpack,
  babel: SiBabel,
  npm: SiNpm,
  yarn: SiYarn,
  threejs: SiThreedotjs,
  d3: SiD3Dotjs,
  openai: SiOpenai,
  github: SiGithub,
  githubactions: SiGithubactions,
  jenkins: SiJenkins,
  jest: SiJest,
  testinglibrary: SiTestinglibrary,
  cypress: SiCypress,
  lighthouse: SiLighthouse,
};

export const SkillIcon = ({
  name,
  className = 'w-10 h-10',
}: {
  name: SkillKey;
  className?: string;
}) => {
  const Icon = skillIcons[name];
  return <Icon className={className} />;
};
