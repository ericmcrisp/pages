% Intro Options
\ProvidesClass{cover}[2014/04/30 CV class]
\NeedsTeXFormat{LaTeX2e}
\DeclareOption{print}{\def\@cv@print{}}
\DeclareOption*{%
  \PassOptionsToClass{\CurrentOption}{article}
}
\ProcessOptions\relax
\LoadClass{article}

% Package Imports
\usepackage[hmargin=2.54cm, vmargin=2cm]{geometry}
\usepackage[hidelinks]{hyperref}
\usepackage[dvipsnames]{xcolor}  % Removed obsolete 'usenames' option
\usepackage{titlesec}
\usepackage[absolute]{textpos}
\usepackage{ragged2e}
\usepackage{soul}

% Font packages
\usepackage[T1]{fontenc}
\usepackage{helvet}
\usepackage{lmodern}
\usepackage{times}

% Publications
\usepackage{cite}
\renewcommand\refname{\vskip -1.5cm}

% Color definitions
\definecolor{date}{HTML}{666666} 
\definecolor{primary}{HTML}{2b2b2b} 
\definecolor{headings}{HTML}{6A6A6A}
\definecolor{subheadings}{HTML}{333333}

% Set main fonts - using standard LaTeX fonts as replacements
\renewcommand{\familydefault}{\sfdefault}
\renewcommand{\sfdefault}{lmr} % Helvetica
\renewcommand{\rmdefault}{ptm} % Times

% Date command
\setlength{\TPHorizModule}{1mm}
\setlength{\TPVertModule}{1mm}
\newcommand{\lastupdated}{\begin{textblock}{60}(155,5)
\color{date}\fontfamily{lmr}\fontsize{8pt}{10pt}\selectfont 
Last Updated on \today
\end{textblock}}

% Name command
\newcommand{\namesection}[3]{
\centering{
\fontfamily{lmr}\fontsize{35pt}{50pt}\selectfont{#1} 
\fontfamily{lmr}\fontsize{35pt}{50pt}\selectfont\textbf{#2}
} \\[5pt]
\centering{
\color{headings}
\fontfamily{lmr}\fontsize{11pt}{14pt}\selectfont #3}
\noindent\makebox[\linewidth]{\color{headings}\rule{\paperwidth}{0.0pt}}
\vspace{0pt}
}

% Section separators 
\titlespacing{\section}{0pt}{0pt}{0pt} 
\titlespacing{\subsection}{0pt}{0pt}{0pt}
\newcommand{\sectionsep}{\vspace{8pt}}

% Headings command
\titleformat{\section}{\color{headings}
\scshape\fontfamily{lmr}\fontsize{16pt}{24pt}\selectfont \raggedright\uppercase}{}{0em}{}

% Subheadings command
\titleformat{\subsection}{
\color{subheadings}\fontfamily{lmr}\fontsize{12pt}{12pt}\selectfont\bfseries\uppercase}{}{0em}{}

\newcommand{\runsubsection}[1]{
\color{subheadings}\fontfamily{lmr}\fontsize{12pt}{12pt}\selectfont\bfseries\uppercase {#1} \normalfont}

% Descriptors command
\newcommand{\descript}[1]{
\color{subheadings}\raggedright\scshape\fontfamily{lmr}\fontsize{11pt}{13pt}\selectfont {#1 \\} \normalfont}

% Location command
\newcommand{\location}[1]{
\color{headings}\raggedright\fontfamily{lmr}\fontsize{10pt}{10pt}\selectfont {#1\\} \normalfont}

% Bullet Lists with fewer gaps command
\newenvironment{tightemize}{
\vspace{-\topsep}\begin{itemize}\itemsep1pt \parskip0pt \parsep0pt}
{\end{itemize}\vspace{-\topsep}}

% Cover Letter
\newcommand{\companyname}[1]{\raggedright\fontfamily{lmr}\fontsize{12pt}{14pt}\selectfont\textbf{#1 \\} \normalfont}

\newcommand{\companyaddress}[1]{\raggedright\fontfamily{lmr}\fontsize{9.5pt}{11pt}\selectfont {#1 \\}\mbox{}\\\mbox{}\\ \normalfont}

\newcommand{\currentdate}[1]{\raggedleft\fontfamily{lmr}\fontsize{11pt}{13pt}\selectfont {#1 \\} \normalfont}

% Letter content command
\newcommand{\lettercontent}[1]{\justifying\fontfamily{lmr}\fontsize{11.0pt}{11pt}\selectfont {#1}\mbox{}\vspace{8pt} \normalfont}

\newcommand{\closing}[2]{\raggedright\fontfamily{lmr}\fontsize{11pt}{25pt}\selectfont{#1,} \\ {#2}\\\mbox{}\mbox{} \normalfont}

% \newcommand{\signature}[1]{\raggedright\fontfamily{lmr}\fontsize{25pt}{10.5pt}\selectfont {#1 \\} \normalfont}