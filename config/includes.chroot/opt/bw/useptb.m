function useptb(version)
%{
Add a specific version of PTB to the path for this session.

%}
if exist('PsychtoolboxVersion')
    error('Psychtoolbox has already been added to the path!');
end

pth = genpath(fullfile('/', 'opt', 'ptb', version, 'Psychtoolbox'));
if isempty(pth)
    dirs = ls('/opt/ptb');
    disp('The requested version was not found, options are:');
    for i = 1:size(dirs, 1)
        name = dirs(i, :);
        if ~(name(1) == '.')
            disp(name);
        end
    end

    error('Failing now.');
end

% reorder such that the right folder is first (i.e. the one with the mex files)
pthlist = strsplit(pth, pathsep());
% find the current location of the folder we want
wild_contains = @(v, str) ~isempty(regexp(v, regexptranslate('wildcard', str)));

isoctave = exist('OCTAVE_VERSION', 'builtin') ~= 0;

if isoctave
    % TODO: does the path rearrangement hurt matlab?
    idx = find(cellfun(wild_contains, pthlist, {'Octave5Linux'}));
    bad1 = find(cellfun(wild_contains, pthlist, {'Octave*OSX'}));
    bad2 = find(cellfun(wild_contains, pthlist, {'MatlabWindows*'}));
    val = pthlist(idx);
    % remove both good and bad entries
    pthlist(idx) = [];
    pthlist(bad1) = [];
    pthlist(bad2) = [];
    pthlist(1) = []; % remove the current directory entry to make prepending easier
    pthlist = ['.', val, pthlist];
end
pthlist = strjoin(pthlist, pathsep);
addpath(pthlist);

% test
if ~exist('PsychtoolboxVersion')
    error('Psychtoolbox was not added to the path!');
end

AssertOpenGL; % another test

end
