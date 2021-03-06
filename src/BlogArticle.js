// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Blog from "./Blog.js";
import * as Icon from "./components/Icon.js";
import * as Meta from "./components/Meta.js";
import * as Next from "./bindings/Next.js";
import * as $$Text from "./components/Text.js";
import * as Util from "./common/Util.js";
import * as React from "react";
import * as BlogApi from "./common/BlogApi.js";
import * as DateStr from "./common/DateStr.js";
import * as Markdown from "./components/Markdown.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as MainLayout from "./layouts/MainLayout.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as BlogFrontmatter from "./common/BlogFrontmatter.js";
import * as NameInitialsAvatar from "./components/NameInitialsAvatar.js";

var middleDotSpacer = " " + (String.fromCharCode(183) + " ");

var Params = {};

var frontmatter = (function(component) {
        if(typeof component.frontmatter === "object") { return component.frontmatter; }
        return {};
      });

function BlogArticle$Line(Props) {
  return React.createElement("div", {
              className: "block border-t border-snow-darker"
            });
}

function BlogArticle$AuthorBox(Props) {
  var author = Props.author;
  var displayName = BlogFrontmatter.Author.getDisplayName(author);
  var src = author.imgUrl;
  var authorImg = src !== null ? React.createElement("img", {
          className: "h-full w-full rounded-full",
          src: src
        }) : React.createElement(NameInitialsAvatar.make, {
          displayName: displayName
        });
  var handle = author.twitter;
  return React.createElement("div", {
              className: "flex items-center"
            }, React.createElement("div", {
                  className: "w-12 h-12 bg-berry-40 block rounded-full mr-3"
                }, authorImg), React.createElement("div", {
                  className: "text-14 font-medium text-night-dark"
                }, handle !== null ? React.createElement("a", {
                        className: "hover:text-night",
                        href: "https://twitter.com/" + handle,
                        rel: "noopener noreferrer",
                        target: "_blank"
                      }, displayName) : displayName, React.createElement("div", {
                      className: "text-night-light"
                    }, author.role)));
}

function BlogArticle$BlogHeader(Props) {
  var date = Props.date;
  var author = Props.author;
  var co_authors = Props.co_authors;
  var title = Props.title;
  var category = Props.category;
  var description = Props.description;
  var articleImg = Props.articleImg;
  var date$1 = DateStr.toDate(date);
  var authors = Belt_Array.concat([author], co_authors);
  return React.createElement("div", {
              className: "flex flex-col items-center"
            }, React.createElement("div", {
                  className: "w-full max-w-705"
                }, React.createElement("div", {
                      className: "text-night-light text-lg mb-5"
                    }, category !== undefined ? React.createElement(React.Fragment, undefined, category, middleDotSpacer) : null, Util.$$Date.toDayMonthYear(date$1)), React.createElement("h1", {
                      className: $$Text.H1.$$default
                    }, title), Belt_Option.mapWithDefault(description, null, (function (desc) {
                        if (desc === "") {
                          return React.createElement("div", {
                                      className: "mb-8"
                                    });
                        } else {
                          return React.createElement("div", {
                                      className: "my-8 text-onyx"
                                    }, React.createElement(Markdown.Intro.make, {
                                          children: desc
                                        }));
                        }
                      })), React.createElement("div", {
                      className: "flex flex-col md:flex-row mb-12"
                    }, Belt_Array.map(authors, (function (author) {
                            return React.createElement("div", {
                                        key: author.username,
                                        className: "mt-4 md:mt-0 md:ml-8 first:ml-0",
                                        style: {
                                          minWidth: "8.1875rem"
                                        }
                                      }, React.createElement(BlogArticle$AuthorBox, {
                                            author: author
                                          }));
                          })))), articleImg !== undefined ? React.createElement("div", {
                    className: "-mx-8 sm:mx-0 sm:w-full bg-night-10 md:mt-24"
                  }, React.createElement("img", {
                        className: "h-full w-full object-cover",
                        style: {
                          maxHeight: "33.625rem"
                        },
                        src: articleImg
                      })) : React.createElement("div", {
                    className: "max-w-705 w-full"
                  }, React.createElement(BlogArticle$Line, {})));
}

function $$default(props) {
  var fullslug = props.fullslug;
  var module_ = require("../_blogposts/" + (fullslug + ".mdx"));
  var archived = fullslug.startsWith("archive/");
  var component = module_.default;
  var authors = BlogFrontmatter.Author.getAllAuthors(undefined);
  var fm = BlogFrontmatter.decode(authors, frontmatter(component));
  var children = React.createElement(component, {});
  var archivedNote = archived ? React.createElement("div", {
          className: "mb-10"
        }, React.createElement(Markdown.Warn.make, {
              children: React.createElement(Markdown.P.make, {
                    children: null
                  }, React.createElement("span", {
                        className: "font-bold"
                      }, "Important: "), "This is an archived blog post, kept for historic reasons. Please note that this information might be terribly outdated.")
            })) : null;
  var content;
  if (fm.TAG === /* Ok */0) {
    var match = fm._0;
    var canonical = match.canonical;
    var description = match.description;
    var title = match.title;
    var category = Belt_Option.map(Caml_option.null_to_opt(match.category), (function (category) {
            return BlogFrontmatter.Category.toString(category);
          }));
    var tmp = {
      title: title + " | ReScript Blog",
      ogImage: Belt_Option.getWithDefault(Caml_option.null_to_opt(match.previewImg), Blog.planetPreviewImg)
    };
    var tmp$1 = description === null ? undefined : Caml_option.some(description);
    if (tmp$1 !== undefined) {
      tmp.description = Caml_option.valFromOption(tmp$1);
    }
    var tmp$2 = canonical === null ? undefined : Caml_option.some(canonical);
    if (tmp$2 !== undefined) {
      tmp.canonical = Caml_option.valFromOption(tmp$2);
    }
    var tmp$3 = {
      date: match.date,
      author: match.author,
      co_authors: match.co_authors,
      title: title,
      description: description === null ? undefined : Caml_option.some(description),
      articleImg: Caml_option.null_to_opt(match.articleImg)
    };
    if (category !== undefined) {
      tmp$3.category = Caml_option.valFromOption(category);
    }
    content = React.createElement("div", {
          className: "w-full"
        }, React.createElement(Meta.make, tmp), React.createElement("div", {
              className: "mb-10 md:mb-20"
            }, React.createElement(BlogArticle$BlogHeader, tmp$3)), React.createElement("div", {
              className: "flex justify-center"
            }, React.createElement("div", {
                  className: "max-w-705 w-full"
                }, archivedNote, children, canonical !== null ? React.createElement("div", {
                        className: "mt-12 text-14"
                      }, "This article was originally released on ", React.createElement("a", {
                            href: canonical,
                            rel: "noopener noreferrer",
                            target: "_blank"
                          }, canonical)) : null, React.createElement("div", {
                      className: "mt-12"
                    }, React.createElement(BlogArticle$Line, {}), React.createElement("div", {
                          className: "pt-20 flex flex-col items-center"
                        }, React.createElement("div", {
                              className: "text-3xl sm:text-4xl text-center text-night-dark font-medium"
                            }, "Want to read more?"), React.createElement(Next.Link.make, {
                              href: "/blog",
                              children: React.createElement("a", {
                                    className: "text-fire hover:text-fire-80"
                                  }, "Back to Overview", React.createElement(Icon.ArrowRight.make, {
                                        className: "ml-2 inline-block"
                                      }))
                            }))))));
  } else {
    content = React.createElement("div", undefined, React.createElement(Markdown.Warn.make, {
              children: null
            }, React.createElement("h2", {
                  className: "font-bold text-night-dark text-2xl mb-2"
                }, "Could not parse file '_blogposts/" + (fullslug + ".mdx'")), React.createElement("p", undefined, "The content of this blog post will be displayed as soon as all\n            required frontmatter data has been added."), React.createElement("p", {
                  className: "font-bold mt-4"
                }, "Errors:"), fm._0));
  }
  return React.createElement(MainLayout.make, {
              children: content
            });
}

function getStaticProps(ctx) {
  var params = ctx.params;
  var fullslug = Belt_Option.getWithDefault(BlogApi.getFullSlug(params.slug), params.slug);
  var props = {
    fullslug: fullslug
  };
  return Promise.resolve({
              props: props
            });
}

function getStaticPaths(param) {
  var paths = Belt_Array.map(BlogApi.getAllPosts(undefined), (function (postData) {
          return {
                  params: {
                    slug: postData.slug
                  }
                };
        }));
  return Promise.resolve({
              paths: paths,
              fallback: false
            });
}

export {
  Params ,
  $$default ,
  $$default as default,
  getStaticProps ,
  getStaticPaths ,
  
}
/* middleDotSpacer Not a pure module */
