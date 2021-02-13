/* global document window */

import ready from 'Utils/documentReady.js';
import getScrollSize from 'Utils/getScrollSize.js';

ready(function () {
  const bodyPaddingRightOriginal = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right'));
  const backdrop = document.createElement('div');

  document.addEventListener('click', function (event) {
    const target = event.target.closest('a[data-modal], button[data-modal]');

    if (target && target.dataset.modal === 'open') {
      showModal( document.getElementById((target.hash || target.dataset.modalTarget).slice(1)) );
    }

    if (target && target.dataset.modal === 'close' || event.target.matches('[aria-modal]')) {
      closeAllModals();
    }

    function showModal(targetModalNode) {
      if ((document.body.clientHeight - document.documentElement.clientHeight) > 0) {
        document.body.style.paddingRight = bodyPaddingRightOriginal + getScrollSize() + 'px';
      }
      document.body.classList.add('modal-open');

      targetModalNode.classList.add('modal--show');
      targetModalNode.style.display = 'block';
      targetModalNode.ariaModal = true;
      targetModalNode.ariaHidden = null;
      targetModalNode.setAttribute('role', 'dialog');

      backdrop.className = 'modal-backdrop';
      document.body.append(backdrop);
    }

    function closeAllModals() {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';

      document.querySelectorAll('.modal').forEach(function (modal) {
        modal.classList.remove('modal--show');
        modal.style.display = 'none';
        modal.ariaModal = null;
        modal.ariaHidden = true;
        modal.removeAttribute('role');
      });

      backdrop.remove();
    }
  });

});
