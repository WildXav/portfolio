import { ref } from 'vue'
import { Lang } from '@/enums/lang'

export const ShellInput = ref('')
export const ShellSubmission = ref('')

export interface CommandInfo {
  name: Command
  arguments?: CommandArgument[]
  options?: string[]
}

export interface CommandArgument {
  name: string
  options?: string[]
}

export interface CommandEntry {
  timestamp: number
  cmdName: Command
  option?: string
  argName?: string
  argValue?: string
}

export enum Command {
  AboutMe = 'about-me',
  Experience = 'experience',
  ProProjects = 'pro-projects',
  PersoProjects = 'perso-projects',
  Intro = 'intro',
  Help = 'help',
  SetLang = 'set-lang',
  Clear = 'clear'
}

export default [
  {
    name: Command.AboutMe
  },
  {
    name: Command.Experience,
    arguments: [
      {
        name: 'company',
        options: ['yanport', 'onepoint', 'renault', 'talan', 'bell', 'deepspace']
      },
      {
        name: 'role',
        options: ['frontend', 'fullstack']
      },
      {
        name: 'tech',
        options: ['angular', 'react', 'vue', 'web3', 'java', 'c#']
      }
    ]
  },
  {
    name: Command.ProProjects,
    arguments: [
      {
        name: 'company',
        options: ['yanport', 'onepoint', 'renault', 'talan', 'bell']
      },
      {
        name: 'tech',
        options: ['angular', 'react', 'vue', 'web3', 'java', 'c#']
      }
    ]
  },
  {
    name: Command.PersoProjects,
    arguments: [
      {
        name: 'tech',
        options: ['angular', 'react', 'vue', 'web3', 'java', 'c#']
      }
    ]
  },
  {
    name: Command.SetLang,
    options: Object.values(Lang).map((l) => l.toLowerCase())
  },
  {
    name: Command.Intro
  },
  {
    name: Command.Help
  },
  {
    name: Command.Clear
  }
] satisfies CommandInfo[]
