const linkCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .link-collabcode {
        display: block;
        text-align: right;
        opacity: .7;
        color: #3a4042;
        text-decoration: none;
        font-size: 14px;
        margin-top: 45px;
        margin-bottom: 40px;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = ({ href, content }) => {
    module._style();

    return `<a class="link-collabcode" href="${href}">${content}</a>`;
  };

  return {
    render: module.render
  };
})();
