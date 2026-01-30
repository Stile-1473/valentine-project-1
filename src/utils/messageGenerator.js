export function generateMessage({ packageName, selection }) {
  const lines = []
  lines.push('Hi,')
  lines.push('I would like to place an order with the following details:')
  lines.push(`Package: ${packageName}`)

  if (selection) {
    if (selection.eventMode) lines.push(`Event: ${selection.eventMode}`)
    if (selection.date) lines.push(`Date: ${selection.date}`)
    if (selection.time) lines.push(`Time: ${selection.time}`)
    if (selection.zone) lines.push(`Zone: ${selection.zone}`)
    lines.push(`Location: ${selection.location || 'TBD'}`)
    lines.push(`Budget: $${selection.budget || 'TBD'}`)
    const items = []
    if (selection.flowers) items.push('Flowers')
    if (selection.cake) items.push('Cake')
    if (selection.dinner) items.push('Dinner')
    if (items.length) lines.push(`Includes: ${items.join(', ')}`)
    if (selection.notes) lines.push(`Notes: ${selection.notes}`)
  }

  lines.push('Please confirm availability and next steps. Thank you.')

  return lines.join('\n')
}
