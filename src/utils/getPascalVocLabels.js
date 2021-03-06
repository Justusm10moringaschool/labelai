import getImagesResolutions from './getImagesResolutions'

function xml(boxes, file, boxNames, { w, h }) {
  return `<annotation>
    <filename>${file.name}</filename>
    <source>
      <database>Unknown</database>
    </source>
    <size>
      <width>${w}</width>
      <height>${h}</height>
      <depth>3</depth>
    </size>
    <segmented>0</segmented>
    ${boxes
      .map(
        ([x, y, mx, my], index) => `
      <object>
        <name>${boxNames?.[index]}</name>
        <pose>Unspecified</pose>
        <truncated>0</truncated>
        <difficult>0</difficult>
        <bndbox>
          <xmin>${x}</xmin>
          <ymin>${y}</ymin>
          <xmax>${mx}</xmax>
          <ymax>${my}</ymax>
        </bndbox>
      </object>
    `
      )
      .join('\n')}
  </annotation>`.replace(/(\n| |\t)/g, '')
}

export default async function getPascalVocLabels(allBoxes, files, labels) {
  const resolutions = await getImagesResolutions(files)

  return allBoxes.map((boxes, i) => ({
    dataurl: `data:text/xml,${xml(boxes, files[i], labels[i], resolutions[i])}`,
    filename: files[i].name.split('.')[0] + '.xml',
  }))
}
