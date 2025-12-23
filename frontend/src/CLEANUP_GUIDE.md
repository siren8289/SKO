# Cleanup Guide

The following directories and files have been identified as legacy or unused and can be safely deleted to clean up the project structure. The application now relies entirely on the `src/` directory.

## Directories to Delete

### `/components`
This directory contains legacy components that have been migrated to `src/ui` or are no longer in use.
- **Can be deleted**: `/components/ui` (contains unused ShadCN components)
- **Note**: The file `/components/figma/ImageWithFallback.tsx` is a protected system file and cannot be deleted by the automated tool. However, the rest of the contents in `/components` are safe to remove.

## Verification
The application source code (`src/` and `App.tsx`) has been scanned, and no imports referencing the root `/components` directory were found. All active UI components are now imported from `src/ui`.
