function teamPhotoSwitcher() {
  const teamBlock = document.getElementById('command');
  let defaultSrc;

  teamBlock.addEventListener('mouseover', event => {
    const target = event.target;

    if (target.classList.contains('command__photo')) {
      defaultSrc = target.src;
      target.src = target.dataset.img;
    }
  });

  teamBlock.addEventListener('mouseout', event => {
    const target = event.target;

    if (target.classList.contains('command__photo')) {
      // Не уверен нужно ли, но следующий ИФ для проверки,
      // когда курсор НА фотке во время перезагрузки страницы. Чтобы он не присвоил пустоту, когда уберешь
      // По крайней мере, логика такая у меня была : )

      if (defaultSrc) {
        target.src = defaultSrc;
      }
    }
  });
}

export default teamPhotoSwitcher;
