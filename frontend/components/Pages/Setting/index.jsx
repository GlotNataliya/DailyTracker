import React from 'react';
import NavSettings from './Subpages/nav';

const Setting = () => {
  const token = document.querySelector('meta[name="csrf-token"]').content;

  return (
    <section className="section">
      <NavSettings />
      <article className="s-article-content">
        <form className="button_to" method="post" action="/users/sign_out">
          <input type="hidden" name="_method" value="delete" />
          <input type="submit" value="Log out" />
          <input type="hidden" name="authenticity_token" value={token} />
        </form>
        <form className="button_to" method="get" action="/users/edit">
          <input type="submit" value="Edit profile" />
        </form>
      </article>
    </section>
  )
}

export default Setting
