import sharp from 'sharp';

await Promise.all([
  sharp('public/images/global_network_4.jpg')
    .resize({
      width: 1920,
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
    })
    .toFile('public/images/global_network_4.webp'),

  sharp('public/images/global_network_4_mobile.jpg')
    .resize({
      width: 900,
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
    })
    .toFile('public/images/global_network_4_mobile.webp'),
]);

console.log('Hero desktop + mobile generados.');
