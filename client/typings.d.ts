type SidebarLink = {
  title: string,
  path: string,
  icon: string
}

type MedicineItem = {
  name: string,
  desc: string,
  img: string,
  quickTips: string,
  saltConsumption: string,
  sideEffects: string,
  uses: string,
}

type Message = {
  key: number,
  text: any,
  msgByBot: boolean
}