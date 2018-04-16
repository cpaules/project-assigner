export const storeClickedProject = project => ({
  type: 'STORE_CLICKED_PROJECT',
  id: project.id,
  text: project.text
})